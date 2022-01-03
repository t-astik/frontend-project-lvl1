import { runGame } from '../runGame.js';
import { generateNumber } from '../generateNumber.js';

const rulesDescription = 'What number is missing in the progression?';

const progressionLength = 10;

function generateProgression(progressionStart, progressionStep) {
  const progression = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(progressionStart + i * progressionStep);
  }
  return progression;
}

function generateGameData() {
  const progressionStart = generateNumber(1, 100);
  const progressionStep = generateNumber(1, 100);
  const progression = generateProgression(progressionStart, progressionStep);
  const randomIndex = generateNumber(0, progressionLength - 1);

  const correctAnswer = String(progression[randomIndex]);

  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
}

export function progressionGame() {
  runGame(generateGameData, rulesDescription);
}

export default progressionGame;
