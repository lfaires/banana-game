import Game from './Game';
import Sprite from './Sprite';

import { randomIntFromInterval, randomBoolean } from './helpers';

export default abstract class FallingSprite extends Sprite {
  canvas;
  source;
  speedY;

  abstract updateState(game: Game): void;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    source: string,
  ) {
    super(context, 0, 0, source);

    this.canvas = canvas;
    this.source = source;
    const randomInitialPosition = this.generateRandomInitialPosition();
    this.x = randomInitialPosition;

    this.speedY = this.generateRandomSpeed();
  }

  move(): void {
    this.y += this.speedY;
  }

  generateRandomSpeed(): number {
    return randomIntFromInterval(3, 7);
  }

  generateRandomInitialPosition(): number {
    const horizontalOrVertical = randomBoolean();

    if (horizontalOrVertical) {
      const randomX = randomIntFromInterval(0, this.canvas.width);
      return randomX;
    }
  }
}
