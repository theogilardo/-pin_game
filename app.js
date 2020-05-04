
var scores, roundScore, activePlayer, gamePlaying

init()

document.querySelector('.btn-roll').addEventListener('click', function() {

  if (gamePlaying) {
        //1. Random Number
    dice = Math.floor(Math.random()*6) + 1

    //2. Display Result
    diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.svg';

    //3. Update score if dice !== 1
    if (dice !== 1) {
      //Update Score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }

    else {
      //Change Player
       nextPlayer()
    }
  }

});


document.querySelector('.btn-hold').addEventListener('click', function() {

  if (gamePlaying) {
    //1. Add score & Update Player Score board
    scores[activePlayer] += roundScore
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];


    //2. Set current sc<ore to 0
    document.querySelector('#current-' + activePlayer).textContent = '0';


    //3. Check if Winner

    if (scores[activePlayer] >= 20) {
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
      diceNone()
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
      gamePlaying = false
    }

    //4. Change Player
    nextPlayer()
  }
});


document.querySelector('.btn-new').addEventListener('click', init);


function diceNone() {
  document.querySelector('.dice').style.display = 'none';
}

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.querySelector('.player-1-panel').classList.toggle('active')
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  diceNone()
}

function init() {
  scores = [0,0]
  roundScore = 0
  activePlayer = 0
  gamePlaying = true

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.add('active')
  document.querySelector('.player-1-panel').classList.remove('active')
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')

  diceNone()
}



