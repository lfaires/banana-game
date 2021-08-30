export default class Sprite {
  context;
  x;
  y;
  src;

  constructor(
    context: CanvasRenderingContext2D,
    initialX: number,
    initialY: number,
    src: string,
  ) {
    this.context = context;
    this.x = initialX;
    this.y = initialY;
    this.src = src;
  }

  draw(): void {
    const img = document.createElement('img');
    img.src = this.src;
    this.context.drawImage(img, this.x, this.y, 45, 60);
  }
}
