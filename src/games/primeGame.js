import { runGame } from '../runGame.js';
import { generateNumber } from '../generateNumber.js';

const rulesDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const validAnswers = {
  yes: 'yes',
  no: 'no',
};

function isPrime(num) {
  if (num === 0 || num === 1) return false;
  const sqrtNum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtNum + 1; i += 1) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function generateGameData() {
  const question = generateNumber(1, 100);
  const correctAnswer = isPrime(question) ? validAnswers.yes : validAnswers.no;
  return { question: String(question), correctAnswer };
}

export function primeGame() {
  runGame(generateGameData, rulesDescription);
}

export default primeGame;
