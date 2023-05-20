export class Vector2 {
  constructor(public x: number, public y: number) {}

  static from({ x, y }: { x: number; y: number }) {
    return new Vector2(x, y);
  }

  set({ x, y }: { x: number; y: number }) {
    this.x = x;
    this.y = y;
    return this;
  }

  cw() {
    const { x: tmpX, y: tmpY } = this;
    this.x = -tmpY;
    this.y = tmpX;
    return this;
  }

  ccw() {
    const { x: tmpX, y: tmpY } = this;
    this.x = tmpY;
    this.y = -tmpX;
    return this;
  }

  copy() {
    return new Vector2(this.x, this.y);
  }

  add(v: Vector2) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v: Vector2) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  mulScalar(s: number) {
    this.x *= s;
    this.y *= s;
    return this;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  distanceTo(v: Vector2) {
    return Math.sqrt((v.x - this.x) ** 2 + (v.y - this.y) ** 2);
  }

  distanceToLine(p1: Vector2, p2: Vector2) {
    return (
      Math.abs(
        (p2.x - p1.x) * (p1.y - this.y) - (p1.x - this.x) * (p2.y - p1.y),
      ) / Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2)
    );
  }

  norm() {
    const l = this.length() || 1;
    this.x /= l;
    this.y /= l;
    return this;
  }
}
