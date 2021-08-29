import Player from './Player';

export default class Game {
  screenWidth: number;
  screenHeight: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  intervalsIds: number[];
  player: Player;

  constructor(
    screenWidth: number,
    screenHeight: number,
    canvas: HTMLCanvasElement,
  ) {
    this.canvas = canvas;
    this.canvas.width = screenWidth;
    this.canvas.height = screenHeight;
    this.context = this.canvas.getContext('2d');
  }

  start() {
    console.log('iniciou');
    this.resetPlayerAndDrawables();
    this.startIntervals();
  }

  onMouseMove(event: MouseEvent) {
    this.player.moveTo(event.clientX);
  }

  // onKeydownMove(event: KeyboardEvent) {
  //   this.player.
  // }

  resetPlayerAndDrawables() {
    this.player = new Player(
      this.context,
      this.canvas.width / 2,
      this.canvas.height,
    );
  }

  startIntervals() {
    this.clearIntervals();
    const { setInterval } = window;

    this.intervalsIds = [
      setInterval(() => this.gameLoop(), 1000 / 120),
      // setInterval(() => this.spawnEnemy(), 2000),
      // setInterval(() => this.spawnFriend(), 1000),
      // setInterval(() => this.spawnSuperFriend(), 2000),
      // setInterval(() => this.updateScore(this.score + 0.1), 30),
    ];
  }

  clearIntervals() {
    this.intervalsIds?.forEach(clearInterval);
  }

  gameLoop() {
    this.renderGame();
  }

  renderGame() {
    this.clearScreen();
    this.player.draw();
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
