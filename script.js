// Function for randomly choosing inside an array
const choose = function (arr) {
  const randomIndex = Math.trunc(Math.random() * 3);
  return arr[randomIndex];
};

// Selecting Elements
const playbtn = document.querySelector("#play");
const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("scissors");
const middleField = document.querySelector(".middle");
const playerEmoji = document.querySelector(".p-option").querySelector("p");
const choices = document.querySelector(".choices");
const compEmoji = document.querySelector("#c-choice");

const pScore = document.querySelector(".p-score").querySelector(".score");
const cScore = document.querySelector(".c-score").querySelector(".score");

const rulesbtn = document.querySelector("#rules");
const resetbtn = document.querySelector("#reset");

// Pre-made elements
let resultMessage = document.createElement("p");
let selected = "";
let playerEmojiContent = "";
let compEmojiContent = "";

// Listening for events
choices.addEventListener("click", function (e) {
  selected = e.target;

  // 1. displaying selected item
  if (selected.textContent === "Rock") {
    playerEmoji.textContent = "✊";
  }
  if (selected.textContent === "Paper") {
    playerEmoji.textContent = "🖐️";
  }
  if (selected.textContent === "Scissors") {
    playerEmoji.textContent = "✌️";
  }
});

// If play btn is played
playbtn.addEventListener("click", () => {
  // 1. choosing and displaying computer's choice
  const compChoices = ["rock", "paper", "scissors"];
  const randomChoice = choose(compChoices);

  if (randomChoice === "rock") {
    compEmoji.textContent = "✊";
  }
  if (randomChoice === "paper") {
    compEmoji.textContent = "🖐️";
  }
  if (randomChoice === "scissors") {
    compEmoji.textContent = "✌️";
  }

  // 2. choosing who won
  playerEmojiContent = playerEmoji.textContent;
  compEmojiContent = compEmoji.textContent;

  if (
    (playerEmojiContent === "✊" && compEmojiContent === "✌️") ||
    (playerEmojiContent === "🖐️" && compEmojiContent === "✊") ||
    (playerEmojiContent === "✌️" && compEmojiContent === "🖐️")
  ) {
    resultMessage.textContent = "You Won!";
    pScore.textContent = Number(pScore.textContent) + 1;
  } else if (playerEmojiContent === compEmojiContent) {
    resultMessage.textContent = "It's a tie!";
  } else {
    resultMessage.textContent = "You lost!";
    cScore.textContent = Number(pScore.textContent) + 1;
  }
  // adding resultMessage to a display block to be seen
  middleField.insertBefore(resultMessage, playbtn);
});

// when player reset data
resetbtn.addEventListener("click", () => {
  // resetting data
  pScore.textContent = cScore.textContent = 0;
  playerEmoji.textContent = "✊";
  compEmoji.textContent = "🧐";
  middleField.removeChild(resultMessage);
});
