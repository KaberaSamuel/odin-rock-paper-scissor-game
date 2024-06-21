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
      "Make your choice among: 'rock', 'paper', 'scissors' "
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
      computer++;
    }
  }

  console.log(`Scores[human: ${humanScores}, computer: ${computerScores}]`);
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerchoice();

playRound(humanSelection, computerSelection);
