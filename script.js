// global variables
const choices = ["rock", "paper", "scissors"];

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
    if (choices.includes(humanChoice)) {
      running = false;
      return humanChoice;
    } else alert("please make a valid choice");
  }
};

console.log(getComputerchoice());
console.log(getHumanChoice());
