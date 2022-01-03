import { runGame } from '../runGame.js';
import { generateNumber } from '../generateNumber.js';

const rulesDescription = 'Find the greatest common divisor of given numbers.';

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

export function generateGameData() {
  const numberA = generateNumber(1, 100);
  const numberB = generateNumber(1, 100);
  const question = `${numberA} ${numberB}`;
  const correctAnswer = String(gcd(numberA, numberB));

  return { question, correctAnswer };
}

export function gcdGame() {
  runGame(generateGameData, rulesDescription);
}

export default gcdGame;
