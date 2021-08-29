import Sprite from './Sprite';

export default class Player extends Sprite {
  constructor(
    context: CanvasRenderingContext2D,
    initialX: number,
    initialY: number,
  ) {
    super(context, initialX, initialY, './sprites/alien.png');
  }

  moveTo(x: number) {
    this.x = x;
  }

  //checkCollision(sprite: Sprite) {}
}
