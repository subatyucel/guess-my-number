'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1; //the random number that will be guessed
let scoreCounter = 20; //the score value
let highScoreCounter = 0; //high score value
const guess = document.querySelector('.guess'); //input
const message = document.querySelector('.message'); //message
const againBtn = document.querySelector('.again'); //again button
const checkBtn = document.querySelector('.check'); //check button
const score = document.querySelector('.score'); //the score text
const highScore = document.querySelector('.highscore'); //the high score text
const body = document.querySelector('body'); //body element
const number = document.querySelector('.number'); //number on the screen "?"

//checks if you guessed correctly
const check = function () {
  let guessed = Number(guess.value);
  //if the user have points to guess
  if (scoreCounter > 1) {
    //if no input
    if (!guessed) {
      message.textContent = '🚫 No number!';
    }
    //if answer is correct
    else if (guessed === randomNumber) {
      message.textContent = '🎉 Correct!';
      body.style.background = '#60b347';
      number.textContent = randomNumber;
      if (scoreCounter > highScoreCounter) highScoreCounter = scoreCounter; //sets the highscore value
      highScore.textContent = highScoreCounter; //displays highscore value
    }

    //if answer is wrong
    else if (guessed !== randomNumber) {
      message.textContent =
        guessed < randomNumber ? '📉 Too low!' : '📈 Too high!';
      scoreCounter--;
      score.textContent = scoreCounter;
    }
  }
  //if the user run out of points
  else {
    scoreCounter--;
    score.textContent = 0;
    message.textContent = 'You lost 😭';
    body.style.background = '#D70040';
  }
};

//resets the game
const playAgain = function () {
  message.textContent = 'Start guessing...';
  scoreCounter = 20;
  score.textContent = scoreCounter;
  body.style.background = '#222';
  guess.value = '';
  number.textContent = '?';
  randomNumber = Math.floor(Math.random() * 20) + 1;
};

checkBtn.addEventListener('click', check);
againBtn.addEventListener('click', playAgain);
