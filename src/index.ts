import Game from './Models/Game';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const canvas: HTMLCanvasElement = document.querySelector('#canvas');

// const img = document.createElement('img');
// img.src = './sprites/alien.png';
// img.addEventListener('load', () => {
//   context.drawImage(img, 10, 10);
// });

const game = new Game(screenWidth, screenHeight, canvas);
game.start();

canvas.addEventListener('mousemove', (event: MouseEvent) => {
  game.onMouseMove(event);
});
