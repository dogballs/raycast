import { Input, InputControl, MouseCode, MouseInput } from './input';
import { GameLoop } from './loop';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

document.body.appendChild(canvas);

const SCALE = 1;

const IW = 640;
const IH = 480;
const CW = 64;
const PW = 8;

const PLAYER_SPEED = 200;

canvas.width = IW;
canvas.height = IH;

canvas.style.background = '#000';
canvas.style.width = `${IW * SCALE}px`;

const input = new Input();
input.listen();

const mouseInput = new MouseInput();
mouseInput.listen(canvas);

const loop = new GameLoop({
  onTick: tick,
});

const player = {
  x: 3 * CW,
  y: 3 * CW,
};

let dir = {
  x: 1,
  y: 0,
  l: 0,
};

let cam = {
  x: 0,
  y: 0,
};

let collisions: { x: number; y: number }[] = [];
let intersections: { x: number; y: number }[] = [];

const fov = 60;

const map = [];
for (let i = 0; i < IW; i += CW) {
  map.push([]);
  for (let j = 0; j < IH; j += CW) {
    map[i / CW].push(0);
  }
}

function drawGrid() {
  ctx.strokeStyle = '#777';
  for (let i = 0; i < IW; i += CW) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, IH);
    ctx.stroke();
  }
  for (let i = 0; i < IH; i += CW) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(IW, i);
    ctx.stroke();
  }
}

function drawPlayer() {
  ctx.fillStyle = '#f00';
  ctx.fillRect(player.x - PW / 2, player.y - PW / 2, PW, PW);
}

function drawTarget() {
  const point = mouseInput.getOverPoint();

  ctx.fillStyle = '#0f0';
  ctx.fillRect(point.x - PW / 2, point.y - PW / 2, PW, PW);
}

function drawDir() {
  ctx.strokeStyle = '#0f0';
  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.lineTo(cam.x, cam.y);
  ctx.stroke();
}

function drawCam() {
  const camHw = Math.tan((fov / 2) * (Math.PI / 180)) * dir.l;

  const rx = -(cam.y - player.y);
  const ry = cam.x - player.x;
  const rl = Math.sqrt(rx * rx + ry * ry);

  const camRight = {
    x: cam.x + (rx / rl) * camHw,
    y: cam.y + (ry / rl) * camHw,
  };

  ctx.strokeStyle = '#ffff00';
  ctx.beginPath();
  ctx.moveTo(cam.x, cam.y);
  ctx.lineTo(camRight.x, camRight.y);
  ctx.lineTo(player.x, player.y);
  ctx.stroke();

  const lx = cam.y - player.y;
  const ly = -(cam.x - player.x);
  const ll = Math.sqrt(lx * lx + ly * ly);

  const camLeft = {
    x: cam.x + (lx / ll) * camHw,
    y: cam.y + (ly / ll) * camHw,
  };

  ctx.strokeStyle = '#ffff00';
  ctx.beginPath();
  ctx.moveTo(cam.x, cam.y);
  ctx.lineTo(camLeft.x, camLeft.y);
  ctx.lineTo(player.x, player.y);
  ctx.stroke();
}

function drawCollisions() {
  ctx.strokeStyle = '#fff';
  for (const collision of collisions) {
    ctx.strokeRect(collision.x * CW, collision.y * CW, CW, CW);
  }
}

function drawIntersections() {
  ctx.strokeStyle = '#fff';
  for (const intersection of intersections) {
    ctx.beginPath();
    ctx.arc(intersection.x, intersection.y, 5, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawMap() {
  ctx.fillStyle = '#00f';
  for (let i = 0; i < IW; i += CW) {
    for (let j = 0; j < IH; j += CW) {
      if (map[i / CW][j / CW]) {
        ctx.fillRect(i, j, CW, CW);
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
  const overPoint = mouseInput.getOverPoint();

  const x = overPoint.x - player.x;
  const y = overPoint.y - player.y;

  const l = Math.sqrt(x * x + y * y) || 1;

  dir = {
    x: x / l,
    y: y / l,
    l,
  };
}

function updateCam() {
  cam = {
    x: player.x + dir.x * dir.l,
    y: player.y + dir.y * dir.l,
  };
}

function updateMap() {
  if (mouseInput.isHold(MouseCode.LeftClick)) {
    const point = mouseInput.getHoldPoint(MouseCode.LeftClick);
    const cell = {
      x: Math.floor(point.x / CW),
      y: Math.floor(point.y / CW),
    };
    map[cell.x][cell.y] = 1;
  }
}

function updateCollisions() {
  collisions = [];
  intersections = [];

  const rayStart = {
    x: player.x,
    y: player.y,
  };

  const rayDir = {
    x: dir.x,
    y: dir.y,
  };

  const rayUnitStepSize = {
    x: Math.sqrt(1 + (rayDir.y / rayDir.x) ** 2),
    y: Math.sqrt(1 + (rayDir.x / rayDir.y) ** 2),
  };

  const mapCheck = {
    x: Math.floor(player.x / CW),
    y: Math.floor(player.y / CW),
  };

  const rayLength = {
    x: 0,
    y: 0,
  };

  const step = { x: 0, y: 0 };

  if (rayDir.x < 0) {
    step.x = -1;
    rayLength.x = (rayStart.x - mapCheck.x * CW) * rayUnitStepSize.x;
  } else {
    step.x = 1;
    rayLength.x = ((mapCheck.x + 1) * CW - rayStart.x) * rayUnitStepSize.x;
  }
  if (rayDir.y < 0) {
    step.y = -1;
    rayLength.y = (rayStart.y - mapCheck.y * CW) * rayUnitStepSize.y;
  } else {
    step.y = 1;
    rayLength.y = ((mapCheck.y + 1) * CW - rayStart.y) * rayUnitStepSize.y;
  }

  const maxDistance = 300;
  let found = false;
  let distance = 0;

  while (!found && distance < maxDistance) {
    if (rayLength.x < rayLength.y) {
      mapCheck.x += step.x;
      distance = rayLength.x;
      rayLength.x += rayUnitStepSize.x * CW;
    } else {
      mapCheck.y += step.y;
      distance = rayLength.y;
      rayLength.y += rayUnitStepSize.y * CW;
    }

    if (
      mapCheck.x < 0 ||
      mapCheck.y < 0 ||
      mapCheck.x >= map.length ||
      mapCheck.y >= map[0].length
    ) {
      break;
    }

    if (map[mapCheck.x][mapCheck.y] === 1) {
      found = true;
      collisions.push({ ...mapCheck });
    }
  }

  if (found) {
    intersections.push({
      x: rayStart.x + rayDir.x * distance,
      y: rayStart.y + rayDir.y * distance,
    });
  }
}

function update({ deltaTime }: { deltaTime: number }) {
  updateMap();
  updatePlayer({ deltaTime });
  updateDir();
  updateCam();
  updateCollisions();
}

function draw() {
  ctx.clearRect(0, 0, IW, IH);

  drawGrid();
  drawMap();
  drawPlayer();
  drawTarget();
  drawDir();
  drawCam();
  drawCollisions();
  drawIntersections();
}

function tick({ deltaTime }: { deltaTime: number }) {
  input.update();
  mouseInput.update({ x: 1 / SCALE, y: 1 / SCALE });

  update({ deltaTime });
  draw();
}

async function main() {
  loop.start();
}

main();
