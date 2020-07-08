// import functions and grab DOM elements
import compareNumbers from './utils.js';
// constants
const input = document.getElementById('number-input');
const button = document.getElementById('submit-button');
const triesRemaining = document.getElementById('tries-remaining');
const guessWas = document.getElementById('guess-was');
const winLose = document.getElementById('win-loss');
const mainBody = document.getElementById('main-body');
const resultSection = document.getElementById('results-section');
const resetButton = document.getElementById('reset-button');
// set event listeners to update state and DOM

const myNumber = Math.ceil(Math.random() * 20);
console.log(myNumber);

let remainCount = 4;

// function submit() {
// }

const userGuess = Number(input.value);
console.log(userGuess);

if (userGuess > 20 || userGuess <= 0) {
    alert('Enter a number between 1 and 20.');
}

const newResult = compareNumbers(userGuess, myNumber);

function youWon() {
    mainBody.style.display = 'none';
    winLose.textContent = 'Stop reading my mind!';
    resultSection.style.opacity = '1';
}

function youLost() {
    mainBody.style.display = 'none';
    winLose.textContent = 'NOT GOOD ENOUGH!';
    resultSection.style.opacity = '1';
}

function reduceCount() {
    remainCount--;
    if (remainCount <= 0) {
        youLost();
    }
}

function displayResults(lowOrHi) {
    triesRemaining.textContent = (`${remainCount} tries remaining.`);
    guessWas.textContent = `Your guess was too ${lowOrHi}.`;
}



button.addEventListener('click',() => {
    
    if (newResult === 0) {
        youWon;
    
    } else if (newResult === -1) {
        reduceCount();
        displayResults('Too Low!');
    } else if (newResult === 1) {
        reduceCount();
        displayResults('Too High!');
    } else {
        throw new Error('inconclusive');
    }
});
const resetPage = () => {
    const userChoice = window.confirm('Are you sure?');

    if (userChoice === true) {
        document.location.reload();
    } else {
        return false;
    }
};

resetButton.addEventListener('click', resetPage);
