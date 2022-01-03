import { runGame } from '../runGame.js';
import { generateNumber } from '../generateNumber.js';

const rulesDescription = 'What is the result of the expression?';

const validOperations = ['+', '-', '*'];

function calculate(leftOperand, rightOperand, operation) {
  switch (operation) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
      throw new Error('Corrupt internal state');
  }
}

export function generateGameData() {
  const leftOperand = generateNumber(1, 100);
  const rightOperand = generateNumber(1, 100);
  const operation = validOperations[generateNumber(0, validOperations.length - 1)];

  const question = [leftOperand, operation, rightOperand].join(' ');
  const correctAnswer = String(calculate(leftOperand, rightOperand, operation));

  return { question, correctAnswer };
}

export function calcGame() {
  runGame(generateGameData, rulesDescription);
}

export default calcGame;
