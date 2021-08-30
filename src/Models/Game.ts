import Fruit from './Fruit';
import Bomb from './Bomb';
import Drawable from './Drawable';
import Player from './Player';

export default class Game {
  screenWidth: number;
  screenHeight: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  intervalsIds: number[];
  player: Player;
  score: number;
  drawables: Drawable[];

  constructor(
    screenWidth: number,
    screenHeight: number,
    canvas: HTMLCanvasElement,
  ) {
    this.canvas = canvas;
    this.canvas.width = screenWidth;
    this.canvas.height = screenHeight;
    this.context = this.canvas.getContext('2d');
    this.score = 0;
  }

  start(): void {
    this.resetPlayerAndDrawables();
    this.startIntervals();
  }

  onMouseMove(event: MouseEvent): void {
    //change to keyboard
    this.player.moveTo(event.clientX);
  }

  resetPlayerAndDrawables(): void {
    this.player = new Player(
      this.context,
      this.canvas.width / 2,
      this.canvas.height,
    );

    this.drawables = [];
  }

  updateScore(newScore: number): void {
    const element = document.querySelector('.score') as HTMLElement;

    this.score = newScore;
    element.innerText = 'Score: ' + this.score;
  }

  startIntervals(): void {
    this.clearIntervals();
    const { setInterval } = window;

    this.intervalsIds = [
      setInterval(() => this.gameLoop(), 1000 / 60),
      setInterval(() => this.spawnBomb(), 2000),
      setInterval(() => this.spawnFruit(), 1000),
      // setInterval(() => this.spawnSuperFriend(), 2000),
      setInterval(() => this.updateScore(this.score), 1000),
    ];
  }

  clearIntervals(): void {
    this.intervalsIds?.forEach(clearInterval);
  }

  gameLoop(): void {
    this.updateState();
    this.renderGame();
  }

  updateState(): void {
    this.drawables.forEach(drawable => drawable.updateState(this));
  }

  renderGame(): void {
    this.clearScreen();
    this.player.draw();
    this.drawables.forEach(drawable => drawable.draw());
  }

  spawnBomb(): void {
    this.drawables.push(new Bomb(this.canvas, this.context));
  }

  spawnFruit(): void {
    this.drawables.push(new Fruit(this.canvas, this.context));
  }

  clearScreen(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  deleteDrawable(drawable: Drawable): void {
    this.drawables = this.drawables.filter(d => d !== drawable);
  }

  endGame(): void {
    this.clearIntervals();
    setTimeout(() => {
      alert(`Fim do jogo! Você fez ${this.score} pontos!`);
    }, 1500);
  }
}
