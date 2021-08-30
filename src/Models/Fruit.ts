import Game from './Game';
import FallingSprite from './FallingSprite';

export default class Fruit extends FallingSprite {
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    super(canvas, context, './sprites/banana.png');

    const fruit = this.whatFruitWillFall();
    this.source = `./sprites/${fruit.name}.png`;
  }

  updateState(game: Game): void {
    this.move();

    if (game.player.checkCollision(this)) {
      const fruit = this.whatFruitWillFall().name;
      const fruitScore = this.whatFruitWillFall().score;
      const newScore =
        game.score === 0 && fruit === 'banana'
          ? 2
          : fruit === 'banana'
          ? game.score * 2
          : game.score + fruitScore;
      game.updateScore(newScore);
      game.deleteDrawable(this);
    }

    this.increaseSpeed();
  }

  increaseSpeed(): void {
    this.speedY *= 1.0001;
  }

  whatFruitWillFall() {
    const probability = Math.ceil(Math.random() * 100);
    if (probability <= 5) {
      return { name: 'banana', score: 0 };
    } else if (probability <= 20) {
      return { name: 'strawberry', score: 30 };
    } else if (probability <= 40) {
      return { name: 'watermelon', score: 20 };
    } else if (probability <= 70) {
      return { name: 'red-apple', score: 10 };
    } else if (probability <= 100) {
      return { name: 'orange', score: 5 };
    }
  }
}
