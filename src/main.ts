import { Input, InputControl, MouseCode, MouseInput } from './input';
import { GameLoop } from './loop';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

document.body.appendChild(canvas);

const SCALE = 1;

const IW = 640;
const IH = 480;
const CW = 16;
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
  x: 0,
  y: 0,
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

function drawCam() {
  const overPoint = mouseInput.getOverPoint();

  const x = overPoint.x - player.x;
  const y = overPoint.y - player.y;

  const l = Math.sqrt(x * x + y * y);

  dir = {
    x: x / l,
    y: y / l,
    l,
  };

  cam = {
    x: player.x + dir.x * dir.l,
    y: player.y + dir.y * dir.l,
  };

  ctx.strokeStyle = '#0f0';
  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.lineTo(cam.x, cam.y);
  ctx.stroke();

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

function draw() {
  ctx.clearRect(0, 0, IW, IH);

  drawGrid();
  drawMap();
  drawPlayer();
  drawTarget();
  drawCam();
}

function tick({ deltaTime }: { deltaTime: number }) {
  input.update();
  mouseInput.update({ x: 1 / SCALE, y: 1 / SCALE });

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

  if (mouseInput.isHold(MouseCode.LeftClick)) {
    const point = mouseInput.getHoldPoint(MouseCode.LeftClick);
    const cell = {
      x: Math.floor(point.x / CW),
      y: Math.floor(point.y / CW),
    };
    map[cell.x][cell.y] = 1;
  }

  draw();
}

async function main() {
  loop.start();
}

main();
