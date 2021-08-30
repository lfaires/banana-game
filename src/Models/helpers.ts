export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomBoolean(): boolean {
  return Math.random() > 0.5;
}
