'use strict';

const guess = document.querySelector('.guess'); //input
const message = document.querySelector('.message'); //message
const checkBtn = document.querySelector('.check'); //check button
const randomNumber = Math.floor(Math.random() * 20) + 1; //the random number that will be guessed
const score = document.querySelector('.score'); //the score
let scoreCounter = 20; //the score's text
document.querySelector('.number').textContent = randomNumber;

const check = function () {
  let guessed = Number(guess.value);
  if (scoreCounter > 1) {
    if (!guessed) {
      message.textContent = '🚫 No number!';
    } else if (guessed === randomNumber) {
      message.textContent = '🎉 Correct!';
    } else if (guessed < randomNumber) {
      message.textContent = '📉 Too low!';
      scoreCounter--;
      score.textContent = scoreCounter;
    } else {
      message.textContent = '📈 Too high!';
      scoreCounter--;
      score.textContent = scoreCounter;
    }
  } else if (scoreCounter === 1) {
    scoreCounter--;
    score.textContent = 0;
    message.textContent = 'You lost 😭';
  }
};

checkBtn.addEventListener('click', check);
