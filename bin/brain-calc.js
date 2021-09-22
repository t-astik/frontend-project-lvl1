#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}
function calculator(num1, num2, mark) {
  switch (mark) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return mark;
  }
}
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let right = true;
let count = 0;
const items = ['+', '-', '*'];
while (right === true && count < 3) {
  const randomNumber1 = getRandomInt();
  const randomNumber2 = getRandomInt();

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
