export default class Game {
  screenWidth: number;
  screenHeight: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(
    screenWidth: number,
    screenHeight: number,
    canvas: HTMLCanvasElement
  ) {
    this.canvas = canvas;
    this.canvas.width = screenWidth;
    this.canvas.height = screenHeight;
    this.context = this.canvas.getContext("2d");
  }

  start(){

  }

  onMouseMove(event: MouseEvent) {
    
  }
}