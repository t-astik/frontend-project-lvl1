#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
let right = true;
let count = 0;
while (right === true && count < 3) {
  const randomNumber1 = getRandomInt();
  const randomNumber2 = getRandomInt();

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
