
/** min and max included */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/** max not included */
export function random(min, max) {
  return Math.random() * (max - min) + min;
}


