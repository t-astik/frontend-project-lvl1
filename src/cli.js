import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
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

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function isPrimeNumber(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

// function cycle(body, right, count) {
//   let rght = true;
//   let count = 0;
//   while (right === true && count < 3) {
//     retrun body
//   }
// }

export {
  greeting, getRandomInt, calculator, gcd, isPrimeNumber,
};
