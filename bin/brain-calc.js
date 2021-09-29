#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { greeting, getRandomInt, calculator } from '../src/cli.js';// eslint-disable-line

const name = greeting();

const max = 10;
const items = ['+', '-', '*'];
let right = true;
let count = 0;
while (right === true && count < 3) {
  const randomNumber1 = getRandomInt(max);
  const randomNumber2 = getRandomInt(max);

  const marker = items[Math.floor(Math.random() * items.length)];

  console.log(`Question: ${randomNumber1} ${marker} ${randomNumber2}`);

  const myAnswer = readlineSync.question('Your answer: ');
  if (parseInt(myAnswer, 10) === calculator(randomNumber1, randomNumber2, marker)) {
    console.log('Correct!');
    right = true;
    count += 1;
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was '${calculator(randomNumber1, randomNumber2, marker)}'`);
    console.log(`Let's try again, ${name}`);
    right = false;
  }
}
