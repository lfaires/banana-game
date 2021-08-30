import Sprite from './Sprite';

export default class Player extends Sprite {
  constructor(
    context: CanvasRenderingContext2D,
    initialX: number,
    initialY: number,
  ) {
    super(context, initialX, initialY - 80, './sprites/alien.png');
  }

  moveTo(x: number): void {
    this.x = x;
  }

  checkCollision(sprite: Sprite): boolean {
    const distanceY = this.y - 80 - (sprite.y + 60);
    const distanceX = this.x === sprite.x;
    return distanceY <= 0 && distanceX;
  }
}
