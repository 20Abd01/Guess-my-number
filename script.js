'use strict';

// DOM Manipulattion
console.log(document.querySelector('.message').textContent); // print the element have className message
// console.log((document.querySelector('.message').textContent = 'low'));
// querySelector for id #idName for class .ClassName like Css
var value = document.querySelector('.guess').value;
// to get value from input use value property .

// Game Start
var message = document.querySelector('.message').textContent;
var colorBeforeWin = document.querySelector('body').style.backgroundColor;
var highscore = 0;
var numberClassContent = document.querySelector('.number').textContent;
var secretNumber = Math.floor(Math.random() * 20 + 1);

// Event !!!!!!!!!!!!!!!!!!!!!!!!!
// mouse click , mouse moving , key press , many other event
// multiple ways to listen for events in JS :

function colorWhite() {
  document.querySelector('.check').style.backgroundColor = '#eee';
  document.querySelector('.guess').style.borderColor = '#eee';
  document.querySelector('.guess').style.color = '#eee';
  document.querySelector('body').style.backgroundColor = colorBeforeWin;
}

function colorRed() {
  document.querySelector('.check').style.backgroundColor = 'red';
  document.querySelector('.guess').style.borderColor = 'red';
  document.querySelector('.guess').style.color = 'red';
  document.querySelector('body').style.backgroundColor = '#880808';
}

// Check Button Event

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  var score = Number(document.querySelector('.score').textContent);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NO NUMBER !';
  }

  // when player wins
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '👏🎉 Correct Number !';
    document.querySelector('.check').disabled = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.getElementById('7').disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when is guess wrong
  else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? '📈 Too High !' : '📉 Too Low !';
    document.querySelector('.score').textContent = --score;
    colorRed();
    if (score > 0) setTimeout(colorWhite, 320);
  }

  //when player lose
  if (score == 0) {
    document.querySelector('.message').textContent = 'GAME OVER 🤦‍♂️';
    document.querySelector('.check').disabled = true;
    document.getElementById('7').disabled = true;
  }
});

// Again button Event

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
  document.querySelector('body').style.backgroundColor = colorBeforeWin;
  document.querySelector('.message').textContent = message;
  document.querySelector('.number').textContent = numberClassContent;
  document.querySelector('.guess').value = '';
  document.getElementById('7').disabled = false;
  colorWhite();
});

// Guess Button Event

document.querySelector('.guess').addEventListener('keyup', function () {
  var value = document.querySelector('.guess').value;
  if (value <= 0 || value > 20) {
    document.querySelector('.guess').value = '';
  }
});
