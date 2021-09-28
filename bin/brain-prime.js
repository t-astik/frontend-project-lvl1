#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}
function isPrimeNumber(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let right = true;
let count = 0;

while (right === true && count < 3) {
  const randomNumber1 = getRandomInt();

  console.log(`Question: ${randomNumber1}`);

  const myAnswer = readlineSync.question('Your answer: ');
  if ((myAnswer === 'yes' && isPrimeNumber(getRandomInt()) === true) || (myAnswer === 'no' && isPrimeNumber(randomNumber1) === false)) {
    console.log('Correct!');
    right = true;
    count += 1;
    if (count === 3) {
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
