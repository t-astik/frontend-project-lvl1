#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { isPrimeNumber, getRandomInt, greeting } from '../src/cli.js';//eslint-disable-line

const name = greeting();
let right = true;
let count = 0;
const max = 100;

while (right === true && count < 3) {
  const randomNumber1 = getRandomInt(max);

  console.log(`Question: ${randomNumber1}`);

  const myAnswer = readlineSync.question('Your answer: ');
  if ((myAnswer === 'yes' && isPrimeNumber(randomNumber1) === true) || (myAnswer === 'no' && isPrimeNumber(randomNumber1) === false)) {
    console.log('Correct!');
    right = true;
    count += 1;
    if (count > 2) {
      console.log(`Congratulations, ${name}!`);
    }
  } else if ((myAnswer === 'yes' && isPrimeNumber(randomNumber1) === false)) {
    console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was 'no'`);
    console.log(`Let's try again, ${name}`);
    right = false;
  } else if ((myAnswer === 'no' && isPrimeNumber(randomNumber1) === true)) {
    console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was 'yes'`);
    console.log(`Let's try again, ${name}`);
    right = false;
  } else if ((myAnswer !== 'no' && myAnswer !== 'yes') && (isPrimeNumber(randomNumber1) === true)) {
    console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was 'yes'`);
    console.log(`Let's try again, ${name}`);
    right = false;
  } else if ((myAnswer !== 'no' && myAnswer !== 'yes') && (isPrimeNumber(randomNumber1) === false)) {
    console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was 'no'`);
    console.log(`Let's try again, ${name}`);
    right = false;
  }
}
