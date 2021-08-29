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

  draw() {
    const img = document.createElement('img');
    img.src = this.src;
    img.addEventListener('load', () => {
      this.context.drawImage(img, this.x - 45, this.y - 80, 45, 60);
    });
  }
}
