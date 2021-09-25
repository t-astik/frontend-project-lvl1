#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}
function getRandomInt1() {
  return Math.floor(Math.random() * 10) + 1;
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
let right = true;
let count = 0;

while (right === true && count < 3) {
  const numbers = [];
  const randomNumber1 = getRandomInt();
  numbers.push(randomNumber1);
  const term = getRandomInt1();
  for (let i = 0; i < 10; i += 1) {
    const nextNumber = numbers[numbers.length - 1] + term;
    numbers.push(nextNumber);
  }
  const index = getRandomInt1();
  const rightAnswer = numbers[index];
  numbers[index] = '..';
  console.log(`Question: ${numbers}`);

  const myAnswer = readlineSync.question('Your answer: ');
  if (parseInt(myAnswer, 10) === parseInt(rightAnswer, 10)) {
    console.log('Correct!');
    right = true;
    count += 1;
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${name}`);
    right = false;
  }
}
