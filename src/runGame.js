import readlineSync from 'readline-sync';

const numberOfTurns = 3;

export function runGame(
  prepareQAPair,
  rulesDescription,
  inputIO = readlineSync.question,
  outputIO = console.log,
) {
  outputIO('Welcome to the Brain Games!');
  const userName = inputIO('May I have your name? ');
  outputIO(`Hello, ${userName}!`);
  outputIO(rulesDescription);

  for (let i = 0; i < numberOfTurns; i += 1) {
    const { question, correctAnswer } = prepareQAPair();

    outputIO(`Question: ${question}`);
    const userAnswer = inputIO('Your answer: ');

    if (userAnswer === correctAnswer) {
      outputIO('Correct!');
    } else {
      outputIO(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      outputIO(`Let's try again, ${userName}!`);
      return;
    }
  }

  outputIO(`Congratulations, ${userName}!`);
}

export default runGame;
