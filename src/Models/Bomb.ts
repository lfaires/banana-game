import Game from './Game';
import FallingSprite from './FallingSprite';

export default class Bomb extends FallingSprite {
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    super(canvas, context, './sprites/bomb.png');
  }

  updateState(game: Game): void {
    this.move();

    if (game.player.checkCollision(this)) {
      game.endGame();
    }

    this.increaseSpeed();
  }

  increaseSpeed(): void {
    this.speedY *= 1.0001;
  }
}
