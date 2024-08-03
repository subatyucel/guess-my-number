'use strict';

const guess = document.querySelector('.guess'); //input
const message = document.querySelector('.message'); //message
const checkBtn = document.querySelector('.check'); //check button
let randomNumber = Math.floor(Math.random() * 20) + 1; //the random number that will be guessed
const score = document.querySelector('.score'); //the score
let scoreCounter = 20; //the score's text
const body = document.querySelector('body'); //body element
const number = document.querySelector('.number'); //number on the screen "?"
const againBtn = document.querySelector('.again'); //again button

//checks if you guessed correctly
const check = function () {
  let guessed = Number(guess.value);
  //if the user have points to guess
  if (scoreCounter > 1) {
    //if no input
    if (!guessed) {
      message.textContent = '🚫 No number!';
    }
    //if user wins
    else if (guessed === randomNumber) {
      message.textContent = '🎉 Correct!';
      body.style.background = '#60b347';
      number.textContent = randomNumber;
    }
    //if user guesses low
    else if (guessed < randomNumber) {
      message.textContent = '📉 Too low!';
      scoreCounter--;
      score.textContent = scoreCounter;
    }
    //if user guesses high
    else {
      message.textContent = '📈 Too high!';
      scoreCounter--;
      score.textContent = scoreCounter;
    }
  }
  //if the user run out of points
  else {
    scoreCounter--;
    score.textContent = 0;
    message.textContent = 'You lost 😭';
  }
};

//resets the game
const playAgain = function () {
  message.textContent = 'Start guessing...';
  scoreCounter = 20;
  body.style.background = '#222';
  guess.value = '';
  number.textContent = '?';
  randomNumber = Math.floor(Math.random() * 20) + 1;
};

checkBtn.addEventListener('click', check);
againBtn.addEventListener('click', playAgain);
