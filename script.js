// global variables
const choices = ["rock", "paper", "scissors"];
let humanScores = 0;
let computerScores = 0;

// function for generating random choice
const getComputerchoice = function () {
  const random = Math.trunc(Math.random() * 3);
  const computerChoice = choices[random];
  return computerChoice;
};

// function for getting human choice
const getHumanChoice = function () {
  let running = true;
  while (running) {
    let humanChoice = prompt(
      `Make your choice among: 'rock', 'paper', 'scissors' `
    );
    humanChoice = humanChoice.toLowerCase();
    if (choices.includes(humanChoice)) {
      running = false;
      return humanChoice;
    } else alert("please make a valid choice");
  }
};

// function for playing a single round
const playRound = function (computer, human) {
  console.log(`Computer: ${computer}
Human: ${human}`);

  if (computer === human) {
    console.log("it's a draw");
  } else {
    if (
      (computer === "rock" && human === "paper") ||
      (computer === "paper" && human === "scissors") ||
      (computer === "scissors" && human === "rock")
    ) {
      console.log(`You won, ${human} beats ${computer}`);
      humanScores++;
    } else {
      console.log(`you lost, ${computer} beats ${human}`);
      computerScores++;
    }
  }

  console.log(`Scores[human: ${humanScores}, computer: ${computerScores}]`);
};

// function for playing inside the game
const playing = function () {
  for (let i = 1; i < 6; i++) {
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerchoice();
    playRound(computerSelection, humanSelection);
    console.log();
  }

  if (humanScores === computerScores) {
    console.log(`It's a draw, you both got equal scores!`);
  } else {
    if (humanScores > computerScores) {
      console.log(
        `You won the game, with ${
          humanScores - computerScores
        } mark(s) ahead of the computer`
      );
    } else {
      console.log(
        `You lost the game, with ${
          computerScores - humanScores
        } mark(s) behind the computer`
      );
    }
  }
};

// function for the whole game
const playGame = function () {
  playing();

  const userAnswer = prompt("do you still want to play ? yes or no");
  if (userAnswer === "yes") {
    console.log();
    console.log("Starting again");
    playing();
  } else {
    console.log("Thanks for playing");
  }
};

playGame();
