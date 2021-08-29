import Game from './Models/Game';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const canvas: HTMLCanvasElement = document.querySelector('#canvas');

const game = new Game(screenWidth, screenHeight, canvas);
game.start();

function onMouseMove(event: MouseEvent) {
  //seta pra direita ou esquerda
  game.onMouseMove(event);
}

function startGame() {
  game.start();
}
