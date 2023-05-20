export class Debug {
  static drawLine(
    ctx: CanvasRenderingContext2D,
    { x: x1, y: y1 }: { x: number; y: number },
    { x: x2, y: y2 }: { x: number; y: number },
    { color = '#fff' }: { color?: string } = {},
  ) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  static drawCircle(
    ctx: CanvasRenderingContext2D,
    { x, y }: { x: number; y: number },
    { r = 5, color = '#fff' }: { r?: number; color?: string } = {},
  ) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  static drawRect(
    ctx: CanvasRenderingContext2D,
    { x, y }: { x: number; y: number },
    { size = 5, color = '#fff' }: { size?: number; color?: string } = {},
  ) {
    ctx.fillStyle = color;
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
  }

  static drawGrid(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    step: number,
    color = '#777',
  ) {
    ctx.strokeStyle = color;
    for (let i = 0; i < width; i += step) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    for (let i = 0; i < height; i += step) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }
  }
}
