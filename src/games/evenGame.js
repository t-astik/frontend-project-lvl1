import { runGame } from '../runGame.js';
import { generateNumber } from '../generateNumber.js';

const rulesDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const validAnswers = {
  yes: 'yes',
  no: 'no',
};

function isEven(num) {
  return num % 2 === 0;
}

export function generateGameData() {
  const question = generateNumber(1, 100);
  const correctAnswer = isEven(question) ? validAnswers.yes : validAnswers.no;

  return { question: String(question), correctAnswer };
}

export function evenGame() {
  runGame(generateGameData, rulesDescription);
}

export default evenGame;
