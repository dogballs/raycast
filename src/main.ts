import { Input, InputControl, MouseCode, MouseInput } from './input';
import { GameLoop } from './loop';
import { Vector2 } from './vector';
import { Debug } from './debug';
import { ImageMap, ImageLoader } from './image';
import { IMAGE_MANIFEST } from './config';

const MAP_WIDTH = 640;
const MAP_HEIGHT = 480;
const MAP_SCALE = 1;

const POV_WIDTH = 320;
const POV_HEIGHT = 240;
const POV_SCALE = 2;

const TILE_SIZE = 64;
const PLAYER_SIZE = 8;

const PLAYER_SPEED = 200;

const FOV = 60;
const FOV_DEPTH = 300;

const resources: { images: ImageMap<typeof IMAGE_MANIFEST> } = {
  images: undefined,
};

const mapCanvas = document.createElement('canvas');
const mapCtx = mapCanvas.getContext('2d');
document.body.appendChild(mapCanvas);

mapCanvas.width = MAP_WIDTH;
mapCanvas.height = MAP_HEIGHT;
mapCanvas.style.background = '#000';
mapCanvas.style.width = `${MAP_WIDTH * MAP_SCALE}px`;

const povCanvas = document.createElement('canvas');
const povCtx = povCanvas.getContext('2d');
document.body.appendChild(povCanvas);

povCanvas.width = POV_WIDTH;
povCanvas.height = POV_HEIGHT;
povCanvas.style.width = `${POV_WIDTH * POV_SCALE}px`;
povCtx.imageSmoothingEnabled = false;

const input = new Input();
input.listen();

const mouseInput = new MouseInput();
mouseInput.listen(mapCanvas);

const imageLoader = new ImageLoader();

const loop = new GameLoop({
  onTick: tick,
});

const player = Vector2.from({
  x: 3 * TILE_SIZE,
  y: 3 * TILE_SIZE,
});

const dir = Vector2.from({
  x: 1,
  y: 0,
});

const cam = Vector2.from({
  x: 0,
  y: 0,
});

const intersections = new Map<
  number,
  {
    point: { x: number; y: number };
    playerDistance: number;
    side: 't' | 'b' | 'r' | 'l';
    castBackPoint: { x: number; y: number };
    castBackDistance: number;
    tile: { x: number; y: number };
  }
>();

const map: number[][] = [];
for (let i = 0; i < MAP_WIDTH; i += TILE_SIZE) {
  map.push([]);
  for (let j = 0; j < MAP_HEIGHT; j += TILE_SIZE) {
    map[i / TILE_SIZE].push(0);
  }
}

function drawMapGrid() {
  Debug.drawGrid(mapCtx, MAP_WIDTH, MAP_HEIGHT, TILE_SIZE);
}

function drawPlayer() {
  Debug.drawRect(mapCtx, player, { size: PLAYER_SIZE, color: '#f00' });
}

function drawMapCam() {
  Debug.drawLine(mapCtx, player, cam, { color: '#0f0' });

  const camHw = Math.tan((FOV / 2) * (Math.PI / 180)) * FOV_DEPTH;

  const rx = -(cam.y - player.y);
  const ry = cam.x - player.x;
  const rl = Math.sqrt(rx * rx + ry * ry);

  const camRight = {
    x: cam.x + (rx / rl) * camHw,
    y: cam.y + (ry / rl) * camHw,
  };

  mapCtx.strokeStyle = '#ffff00';
  mapCtx.beginPath();
  mapCtx.moveTo(cam.x, cam.y);
  mapCtx.lineTo(camRight.x, camRight.y);
  mapCtx.lineTo(player.x, player.y);
  mapCtx.stroke();

  const lx = cam.y - player.y;
  const ly = -(cam.x - player.x);
  const ll = Math.sqrt(lx * lx + ly * ly);

  const camLeft = {
    x: cam.x + (lx / ll) * camHw,
    y: cam.y + (ly / ll) * camHw,
  };

  mapCtx.strokeStyle = '#ffff00';
  mapCtx.beginPath();
  mapCtx.moveTo(cam.x, cam.y);
  mapCtx.lineTo(camLeft.x, camLeft.y);
  mapCtx.lineTo(player.x, player.y);
  mapCtx.stroke();
}

function drawMapIntersections() {
  for (const intersection of intersections.values()) {
    Debug.drawCircle(mapCtx, intersection.point);
    // Debug.drawLine(mapCtx, intersection.point, intersection.castBackPoint, {
    //   color: '#0f0',
    // });
  }
}

function drawMapTiles() {
  for (let i = 0; i < MAP_WIDTH; i += TILE_SIZE) {
    for (let j = 0; j < MAP_HEIGHT; j += TILE_SIZE) {
      const value = map[i / TILE_SIZE][j / TILE_SIZE];
      if (value !== 0) {
        mapCtx.fillStyle = '#00f';
        mapCtx.fillRect(i, j, TILE_SIZE, TILE_SIZE);
        mapCtx.fillStyle = '#999';
        mapCtx.font = '20px Courier';
        mapCtx.fillText(`${value}`, i + TILE_SIZE / 2, j + TILE_SIZE / 2);
      }
    }
  }
}

function updatePlayer({ deltaTime }: { deltaTime: number }) {
  const posChange = PLAYER_SPEED * deltaTime;
  if (input.isHold(InputControl.Up)) {
    player.y -= posChange;
  }
  if (input.isHold(InputControl.Down)) {
    player.y += posChange;
  }
  if (input.isHold(InputControl.Left)) {
    player.x -= posChange;
  }
  if (input.isHold(InputControl.Right)) {
    player.x += posChange;
  }
}

function updateDir() {
  const overPoint = Vector2.from(mouseInput.getOverPoint());

  dir.set(overPoint.sub(player).norm());
}

function updateCam() {
  cam.set(player.copy().add(dir.copy().mulScalar(FOV_DEPTH)));
}

function updateMap() {
  if (mouseInput.isDown(MouseCode.LeftClick)) {
    const point = mouseInput.getDownPoint(MouseCode.LeftClick);
    const cell = {
      x: Math.floor(point.x / TILE_SIZE),
      y: Math.floor(point.y / TILE_SIZE),
    };
    const value = map[cell.x][cell.y];
    let nextValue = value + 1;
    if (nextValue > 3) {
      nextValue = 0;
    }
    map[cell.x][cell.y] = nextValue;
  }
}

function updateCollisions() {
  intersections.clear();

  const camHalfWidth = Math.tan((FOV / 2) * (Math.PI / 180)) * FOV_DEPTH;
  const camStep = -(camHalfWidth * 2) / POV_WIDTH;

  const camLeftNorm = cam.copy().sub(player).ccw().norm();

  const camLeft = cam.copy().add(camLeftNorm.copy().mulScalar(camHalfWidth));
  const camRight = cam.copy().add(camLeftNorm.copy().mulScalar(-camHalfWidth));

  const playerLeft = camLeft.copy().sub(dir.copy().mulScalar(FOV_DEPTH));
  const playerRight = camRight.copy().sub(dir.copy().mulScalar(FOV_DEPTH));

  // Debug.drawCircle(mapCtx, camLeft);
  // Debug.drawCircle(mapCtx, camRight);
  // Debug.drawCircle(mapCtx, playerLeft);
  // Debug.drawCircle(mapCtx, playerRight);

  // Debug.drawLine(mapCtx, playerLeft, playerRight);

  for (let col = 0; col < POV_WIDTH + 1; col += 1) {
    const point = {
      x: camLeft.x + camLeftNorm.x * camStep * col,
      y: camLeft.y + camLeftNorm.y * camStep * col,
    };

    // Debug.drawLine(mapCtx, player, point, { color: '#555' });
    const ints = collideRay({ point });
    if (ints.length) {
      const ins = ints[0];

      const castBackDistance = Vector2.from(ins).distanceToLine(
        playerLeft,
        playerRight,
      );
      const castBackPoint = Vector2.from(ins).sub(
        dir.copy().mulScalar(castBackDistance),
      );

      intersections.set(col, {
        point: { x: ins.x, y: ins.y },
        playerDistance: ins.distance,
        side: ins.side,
        castBackDistance: castBackDistance,
        castBackPoint,
        tile: ins.tile,
      });
    }
  }
}

function collideRay({ point }: { point: { x: number; y: number } }) {
  const rayStart = {
    x: player.x,
    y: player.y,
  };

  const x = point.x - rayStart.x;
  const y = point.y - rayStart.y;

  const l = Math.sqrt(x * x + y * y) || 1;

  const rayDir = {
    x: x / l,
    y: y / l,
  };

  const rayUnitStepSize = {
    x: Math.sqrt(1 + (rayDir.y / rayDir.x) ** 2),
    y: Math.sqrt(1 + (rayDir.x / rayDir.y) ** 2),
  };

  const mapCheck = {
    x: Math.floor(player.x / TILE_SIZE),
    y: Math.floor(player.y / TILE_SIZE),
  };

  const rayLength = {
    x: 0,
    y: 0,
  };

  const step = { x: 0, y: 0 };

  if (rayDir.x < 0) {
    step.x = -1;
    rayLength.x = (rayStart.x - mapCheck.x * TILE_SIZE) * rayUnitStepSize.x;
  } else {
    step.x = 1;
    rayLength.x =
      ((mapCheck.x + 1) * TILE_SIZE - rayStart.x) * rayUnitStepSize.x;
  }
  if (rayDir.y < 0) {
    step.y = -1;
    rayLength.y = (rayStart.y - mapCheck.y * TILE_SIZE) * rayUnitStepSize.y;
  } else {
    step.y = 1;
    rayLength.y =
      ((mapCheck.y + 1) * TILE_SIZE - rayStart.y) * rayUnitStepSize.y;
  }

  const maxDistance = FOV_DEPTH;
  let found = false;
  let distance = 0;
  let side: 't' | 'b' | 'l' | 'r';

  while (!found && distance < maxDistance) {
    if (rayLength.x < rayLength.y) {
      mapCheck.x += step.x;
      distance = rayLength.x;
      rayLength.x += rayUnitStepSize.x * TILE_SIZE;
      side = rayDir.x < 0 ? 'r' : 'l';
    } else {
      mapCheck.y += step.y;
      distance = rayLength.y;
      rayLength.y += rayUnitStepSize.y * TILE_SIZE;
      side = rayDir.y < 0 ? 'b' : 't';
    }

    if (
      mapCheck.x < 0 ||
      mapCheck.y < 0 ||
      mapCheck.x >= map.length ||
      mapCheck.y >= map[0].length
    ) {
      break;
    }

    if (map[mapCheck.x][mapCheck.y] !== 0) {
      found = true;
    }
  }

  if (found) {
    return [
      {
        x: rayStart.x + rayDir.x * distance,
        y: rayStart.y + rayDir.y * distance,
        distance,
        side,
        tile: mapCheck,
      },
    ];
  }

  return [];
}

function update({ deltaTime }: { deltaTime: number }) {
  updateMap();
  updatePlayer({ deltaTime });
  updateDir();
  updateCam();
  updateCollisions();
}

function drawMap() {
  drawMapGrid();
  drawMapTiles();
  drawPlayer();
  drawMapCam();
  drawMapIntersections();
}

function drawPov() {
  drawPovWalls();
}

function drawPovWalls() {
  povCtx.clearRect(0, 0, POV_WIDTH, POV_HEIGHT);

  povCtx.fillStyle = '#999';
  povCtx.fillRect(0, 0, POV_WIDTH, POV_HEIGHT / 2);

  povCtx.fillStyle = '#666';
  povCtx.fillRect(0, POV_HEIGHT / 2, POV_WIDTH, POV_HEIGHT / 2);

  for (let col = 0; col < POV_WIDTH; col++) {
    const intersection = intersections.get(col);
    if (!intersection) {
      continue;
    }
    const { point, tile, side } = intersection;

    const tileValue = map[tile.x][tile.y];

    let texture;
    if (tileValue === 1) {
      texture = resources.images.wall1;
    } else if (tileValue === 2) {
      texture = resources.images.wall2;
    } else if (tileValue === 3) {
      texture = resources.images.wall3;
    }

    let wallX;
    if (side === 'l' || side === 'r') {
      wallX = point.y - tile.y * TILE_SIZE;
    } else {
      wallX = point.x - tile.x * TILE_SIZE;
    }
    if (side === 'r' || side === 't') {
      wallX = TILE_SIZE - wallX;
    }

    const textureX = Math.floor((wallX / TILE_SIZE) * texture.width);

    const distance = intersection.castBackDistance;
    const lineHeight = 15000 / distance;
    const lineStart = (POV_HEIGHT - lineHeight) / 2;
    // povCtx.fillStyle = intersection.side === 0 ? '#00f' : '#00e';
    // povCtx.fillRect(col, lineStart, 1, lineHeight);

    if (side === 'l' || side === 'r') {
      povCtx.filter = 'brightness(1)';
    } else {
      povCtx.filter = 'brightness(0.7)';
    }

    povCtx.drawImage(
      texture,
      textureX,
      0,
      1,
      texture.height,
      col,
      lineStart,
      1,
      lineHeight,
    );

    povCtx.filter = 'brightness(1)';
  }
}

function tick({ deltaTime }: { deltaTime: number }) {
  input.update();
  mouseInput.update({ x: 1 / MAP_SCALE, y: 1 / MAP_SCALE });

  mapCtx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);

  update({ deltaTime });
  drawMap();
  drawPov();
}

async function main() {
  resources.images = await imageLoader.loadImages(IMAGE_MANIFEST);

  loop.start();
}

main();
