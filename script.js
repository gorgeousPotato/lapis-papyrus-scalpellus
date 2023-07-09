// 'use strict';

const gameOptions = ['Lapis', 'Papyrus', 'Scalpellus'];
const player = {
  currentChoice: null,
};
const computer = {
  currentChoice: null,
};
//variable to store who wins
let playerWin = false;
function computerChooses() {
  computer.currentChoice = gameOptions[Math.floor(Math.random() * 3)];
}
computerChooses();

//user is choosing via clicking a button
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', function (e) {
  player.currentChoice = e.target.innerHTML;

  //comparing the result
  let result = '';
  if (player.currentChoice === computer.currentChoice) {
    result = `DRAW! You both chose ${player.currentChoice}`;
  } else {
    if (player.currentChoice === gameOptions[0]) {
      if (computer.currentChoice === gameOptions[1]) {
        playerWin = false;
      } else if (computer.currentChoice === gameOptions[2]) {
        playerWin = true;
      }
    } else if (player.currentChoice === gameOptions[1]) {
      if (computer.currentChoice === gameOptions[0]) {
        playerWin = true;
      } else if (computer.currentChoice === gameOptions[2]) {
        playerWin = false;
      }
    } else if (player.currentChoice === gameOptions[2]) {
      if (computer.currentChoice === gameOptions[0]) {
        playerWin = false;
      } else if (computer.currentChoice === gameOptions[1]) {
        playerWin = true;
      }
    }
    result = `${playerWin ? 'You win!' : 'Computer wins!'} You chose ${
      player.currentChoice
    }, and computer chose ${computer.currentChoice}`;
  }
  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.innerHTML = result;
  body.append(p);
});
