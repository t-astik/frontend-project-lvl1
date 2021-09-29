#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gcd, getRandomInt, greeting } from '../src/cli.js';//eslint-disable-line

const name = greeting();
let right = true;
let count = 0;
const max = 100;
while (right === true && count < 3) {
  const randomNumber1 = getRandomInt(max);
  const randomNumber2 = getRandomInt(max);

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  const myAnswer = readlineSync.question('Your answer: ');
  if (parseInt(myAnswer, 10) === gcd(randomNumber1, randomNumber2)) {
    console.log('Correct!');
    right = true;
    count += 1;
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was '${gcd(randomNumber1, randomNumber2)}'`);
    console.log(`Let's try again, ${name}`);
    right = false;
  }
}
