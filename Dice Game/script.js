'use strict'

//Selecting values


const player0El = document.querySelector('#score--0');
const Player1El = document.getElementById('score--1');
const play0=document.querySelector('.player--0');
const play1=document.querySelector('.player--1');
const DiceEl = document.querySelector('.dice');
const greet = document.querySelector('.greet');
const diceRoll = document.querySelector('.btn--roll');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnHold = document.querySelector('.btn--hold');
const rulesBtn = document.querySelector('.rules');
const rulePara = document.querySelector('#para1');


let currentScore=0;
let activePlayer = 0;
const scores = [0,0];
let playing=true;


const SwitchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore=0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        play0.classList.toggle('player--active');
        play1.classList.toggle('player--active');
}

// Starting conditions
player0El.textContent="0";
Player1El.textContent = "0";
DiceEl.classList.add('hidden');


//Game Rules section
rulesBtn.addEventListener('click',function(){
    rulePara.classList.toggle('hidden');
});


//Rolling the dice
//for rolling the dice on click
diceRoll.addEventListener('click',function(){
    if(playing){
        //generating random number
        const dice = Math.trunc(Math.random()*6) + 1;
        DiceEl.classList.remove('hidden');
        DiceEl.src = `${dice}.png`;
     
        if(dice==1){
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
            //Switching the player
            SwitchPlayer();
        }else{
            //Adding to current value
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent =currentScore;
        }
    }
});
btnHold.addEventListener('click',function(){
    if(playing){
        scores[activePlayer] += currentScore;
    
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        
        if(scores[activePlayer] >= 10){
            //finish the game
            playing = false;
            DiceEl.classList.add('hidden');
            document.querySelector(`#greet--${activePlayer}`).classList.remove('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else{
            SwitchPlayer();
        }
    }
});