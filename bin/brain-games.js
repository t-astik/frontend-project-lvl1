#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt() {
  return Math.floor(Math.random() * 1000000);
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumber = getRandomInt();
console.log(`Question: ${randomNumber}`);

const myAnswer = readlineSync.question('Your answer: ');

if ((myAnswer === 'yes' && randomNumber % 2 === 0) || (myAnswer === 'no' && randomNumber % 2 !== 0)) {
  console.log('Correct!');
} else if (myAnswer === 'yes') {
  console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
  console.log(`Let's try again, ${name}`);
} else if (myAnswer === 'no') {
  console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
  console.log(`Let's try again, ${name}`);
} else if (myAnswer !== 'yes' && myAnswer !== 'no' && randomNumber % 2 === 0) {
  console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was 'yes'`);
  console.log(`Let's try again, ${name}`);
} else if (myAnswer !== 'yes' && myAnswer !== 'no' && randomNumber % 2 !== 0) {
  console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was 'no'`);
  console.log(`Let's try again, ${name}`);
}
