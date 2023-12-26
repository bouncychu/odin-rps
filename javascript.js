//Javascript for Rock Paper Scissors
//Write function that randomly returns output as rock paper or scissors

let computerSelection = function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        computerChoice = "rock";
    }
    else if (computerChoice === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

//get the player's choice by listening for clicks on the 3 options and plays 1 round of rock paper scissors
let humanChoice;
let roundScore;
const displayRoundResult = document.createElement('h3');
const hidePlayerChoices = document.querySelector('.player-choice-container');
const continueButton = document.createElement('button');
continueButton.setAttribute('id', 'continue-button');
continueButton.textContent = 'CONTINUE';
const continueButtonContainer = document.createElement('div');
continueButtonContainer.setAttribute('id', 'continue-button-container');
const roundWinnerAnnouncement = document.createElement('h2');
const gameEndMenuContainer = document.querySelector('#game-end-menu');
const gameEndMenuMessage = document.querySelector('#game-end-message');

// Function for best of 5 game to be played
let playGame = function game() {
    roundResultContainer.setAttribute('style', 'display: none');
    roundResultContainer.textContent = roundScore;
    console.log('human choice is ' + humanChoice);
    let roundResult = singleRound(humanChoice, computerSelection());
    console.log(roundResult);
    roundScore = getScore(roundResult);
    console.log (roundScore);
    scoreBoardContainer.after(continueButtonContainer)
    roundWinnerAnnouncement.textContent = roundResult.toUpperCase(roundResult) + "!";
    continueButtonContainer.appendChild(roundWinnerAnnouncement);
    continueButtonContainer.appendChild(continueButton);
    hidePlayerChoices.setAttribute('style', 'display: none');
    if (playerScore === 3) {
        roundResultContainer.textContent = roundScore;
        scoreBoardContainer.setAttribute('style', 'display: flex');
        continueButtonContainer.setAttribute('style', 'display: none');
        roundResultContainer.setAttribute('style', 'display: flex');
        gameEndMenuContainer.setAttribute('style', 'display: flex');
        gameEndMenuMessage.textContent = "Congratulations! Player wins best of 5! Computer Cat loses :(";
        }
    else if ( computerScore === 3) {
        roundResultContainer.textContent = roundScore;
        scoreBoardContainer.setAttribute('style', 'display: flex');
        continueButtonContainer.setAttribute('style', 'display: none');
        roundResultContainer.setAttribute('style', 'display: flex');
        gameEndMenuContainer.setAttribute('style', 'display: flex');
        gameEndMenuMessage.textContent = "Sorry! Computer Cat Wins best of 5! : ) Player loses.";
    }
    else if (round === 5) {
        if (playerScore > computerScore) {
            roundResultContainer.textContent = roundScore;
            scoreBoardContainer.setAttribute('style', 'display: flex');
            continueButtonContainer.setAttribute('style', 'display: none');
            roundResultContainer.setAttribute('style', 'display: flex');
            gameEndMenuContainer.setAttribute('style', 'display: flex');
            gameEndMenuMessage.textContent = "Congratulations! Player wins best of 5! Computer Cat loses :(";
        }
        else if (playerScore < computerScore) {
            roundResultContainer.textContent = roundScore;
            scoreBoardContainer.setAttribute('style', 'display: flex');
            continueButtonContainer.setAttribute('style', 'display: none');
            roundResultContainer.setAttribute('style', 'display: flex');
            gameEndMenuContainer.setAttribute('style', 'display: flex');
            gameEndMenuMessage.textContent = "Sorry! Computer Cat Wins best of 5! : ) Player loses.";    
        }
        else if (playerScore === computerScore) {
            roundResultContainer.textContent = roundScore;
            scoreBoardContainer.setAttribute('style', 'display: flex');
            continueButtonContainer.setAttribute('style', 'display: none');
            roundResultContainer.setAttribute('style', 'display: flex');
            gameEndMenuContainer.setAttribute('style', 'display: flex');
            gameEndMenuMessage.textContent = "It's a tie. Click the button below to challenge Computer Cat again!";
        }
    }
    const buttonClicked = document.querySelector('#continue-button');
    buttonClicked.addEventListener('click', function newRound() {
        continueButtonContainer.remove();
        scoreBoardContainer.remove();
        hidePlayerChoices.setAttribute('style', 'display: flex');
        roundAnnouncement = roundScore.toString(); 
        roundResultContainer.textContent = roundScore;
        roundResultContainer.setAttribute("style", "display: flex");
    })
}

const clickRock = document.querySelector("#btn-rock");
clickRock.addEventListener('click', function choseRock() {
    humanChoice = 'rock';
    playGame();
})

let clickPaper = document.querySelector("#btn-paper");
clickPaper.addEventListener('click', function chosePaper() {
    humanChoice = 'paper';
    playGame();
})

let clickScissors = document.querySelector("#btn-scissors");
clickScissors.addEventListener('click', function choseScissors() {
    humanChoice = 'scissors';
    playGame();
})

const roundResultContainer = document.createElement('div');
roundResultContainer.setAttribute("id", "round-result-container");
roundResultContainer.textContent = "to be REPLACED on click";

//initialisation of variables used

let titleContainer = document.querySelector('.title'); 
titleContainer.appendChild(roundResultContainer);

let scoreBoardContainer = document.createElement("div");
let playerChoiceContainer = document.createElement("div")
let vsContainer = document.createElement("div");
let computerChoiceContainer = document.createElement("div");
vsContainer.textContent = "VS";
scoreBoardContainer.appendChild(playerChoiceContainer);
let appendVsContainer = document.querySelector(".title");
scoreBoardContainer.classList.add('score-board-container');
const playerChoiceLabel = document.createElement('h3');
playerChoiceLabel.textContent = "Player"
const computerChoiceLabel = document.createElement ('h3');
computerChoiceLabel.textContent = "Computer Cat";
let playerImageRock = document.createElement('img');
playerImageRock.src ="./images/playerrock.jpeg";
let playerImagePaper = document.createElement('img');
playerImagePaper.src = "./images/playerpaper.jpeg";
let playerImageScissors = document.createElement('img');
playerImageScissors.src = "./images/playerscissors.jpeg";
playerImageRock.setAttribute('class', 'round-choice-image');
playerImagePaper.setAttribute('class', 'round-choice-image');
playerImageScissors.setAttribute('class', 'round-choice-image');
playerChoiceContainer.appendChild(playerChoiceLabel);
playerChoiceContainer.appendChild(playerImageRock);
playerChoiceContainer.appendChild(playerImagePaper);
playerChoiceContainer.appendChild(playerImageScissors);

let computerImageRock = document.createElement ('img');
let computerImagePaper = document.createElement('img');
let computerImageScissors = document.createElement('img');
computerImageRock.src ="./images/catrock.png"
computerImagePaper.src = "./images/catpaper.png";
computerImageScissors.src = "./images/catscissors.png";
computerImageRock.setAttribute('class', 'round-choice-image');
computerImagePaper.setAttribute('class', 'round-choice-image');
computerImageScissors.setAttribute('class', 'round-choice-image');
computerChoiceContainer.appendChild(computerChoiceLabel);
computerChoiceContainer.appendChild(computerImageRock);
computerChoiceContainer.appendChild(computerImagePaper);
computerChoiceContainer.appendChild(computerImageScissors);


//Function to show the weapon that player chose and hide other images

function getPlayerImage() {
    let playerImage = document.createElement('img');
    if (humanChoice === "rock") {
        playerImageRock.setAttribute("style", "display: flex");
        playerImageScissors.setAttribute("style", "display: none");
        playerImagePaper.setAttribute("style", "display: none");
    }
    else if (humanChoice === "paper") {
        playerImagePaper.setAttribute("style", "display: flex");
        playerImageScissors.setAttribute("style", "display: none");
        playerImageRock.setAttribute("style", "display: none");
    }
    else if (humanChoice === "scissors") {
        playerImageScissors.setAttribute("style", "display: flex");
        playerImageRock.setAttribute("style", "display: none");
        playerImagePaper.setAttribute("style", "display: none");
    }
}

//function to show what the computer chose and hide other images

function getComputerImage(computerChoice) {
    let computerImage = document.createElement('img');
    if (computerChoice === "rock") {
        console.log("computer image printed");
        computerImageRock.setAttribute("style", "display: flex");
        computerImagePaper.setAttribute("style", "display: none");
        computerImageScissors.setAttribute("style", "display: none");
    }
    else if (computerChoice === "paper") {
        console.log("computer image printed");
        computerImagePaper.setAttribute("style", "display: flex");
        computerImageRock.setAttribute("style", "display: none");
        computerImageScissors.setAttribute("style", "display: none");
    }
    else if (computerChoice === "scissors") {
        console.log("computer image printed");
        computerImageScissors.setAttribute("style", "display: flex");
        computerImagePaper.setAttribute("style", "display: none");
        computerImageRock.setAttribute("style", "display: none");
    }
}

// Function to play a single round of rock paper scissors and determine a winner by taking in human & computer choices

let singleRound = function playRound (humanChoice, computerChoice) {
    console.log('computer choice is ' + computerChoice);
    console.log(`human choice is: ${humanChoice}, computer choice is: ${computerChoice}`)

    getPlayerImage();
    getComputerImage(computerChoice);
    titleContainer.after(scoreBoardContainer);
    scoreBoardContainer.appendChild(playerChoiceContainer);
    scoreBoardContainer.appendChild(vsContainer);
    scoreBoardContainer.appendChild(computerChoiceContainer);
    if ((humanChoice === 'rock' && computerChoice === 'rock') || 
        (humanChoice === 'paper' && computerChoice === 'paper') || 
        (humanChoice === 'scissors' && computerChoice === 'scissors')) {
            roundResult = 'tie';
            return roundResult;
    }
    if (computerChoice === "rock" && humanChoice === "paper") {
        return "player wins";
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        return "player loses";
    }
    else if (computerChoice === "paper" && humanChoice === "scissors") {
        return "player wins";
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        return "player loses";
    }
    else if (computerChoice === "scissors" && humanChoice === "rock") {
        return "player wins";
    }
    else {
        return "player loses";
    }
}

// Function to keep score by adding points based on result of singleRound Function

let playerScore = 0;
let computerScore = 0;
let round = 0
let getScore = function scoreBoard (roundResult) {
    round++;
    if (roundResult === "player wins") {
        playerScore++;
    }
    else if (roundResult === "player loses") {
        computerScore++;
    }
    return ('Rounds Played: ' + round + '. ' + 'Player Score: ' + playerScore + ". " + "Computer Score: " + computerScore + ".");
}