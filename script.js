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
const middleEle = document.querySelector(".middle");
const option = document.querySelector(".p-option");
const choices = document.querySelector(".choices");
const compChoice = document.querySelector("#c-choice");

// creating elements for inserting on a page
let resultMessage = document.createElement("p");

// Listening for events
choices.addEventListener("click", function (e) {
  const selected = e.target;

  // 1. displaying selected item
  if (selected.textContent === "Rock") {
    option.querySelector("p").textContent = "✊";
  }
  if (selected.textContent === "Paper") {
    option.querySelector("p").textContent = "🖐️";
  }
  if (selected.textContent === "Scissors") {
    option.querySelector("p").textContent = "✌️";
  }
});

// If play btn is played
playbtn.addEventListener("click", () => {
  // 1. choosing and displaying computer's choice
  const compChoices = ["rock", "paper", "scissors"];
  const randomChoice = choose(compChoices);

  if (randomChoice === "rock") {
    compChoice.textContent = "✊";
  }
  if (randomChoice === "paper") {
    compChoice.textContent = "🖐️";
  }
  if (randomChoice === "scissors") {
    compChoice.textContent = "✌️";
  }

  // 2. choosing who won
  const playerEmojiChoice = option.querySelector("p").textContent;
  const compEmojiChoice = compChoice.textContent;

  if (
    (playerEmojiChoice === "✊" && compEmojiChoice === "✌️") ||
    (playerEmojiChoice === "🖐️" && compEmojiChoice === "✊") ||
    (playerEmojiChoice === "✌️" && compEmojiChoice === "🖐️")
  ) {
    resultMessage.textContent = "You Won!";
  } else if (playerEmojiChoice === compEmojiChoice) {
    resultMessage.textContent = "It's a tie!";
  } else {
    resultMessage.textContent = "You lost!";
  }
  // adding resultMessage to a display block to be seen
  middleEle.insertBefore(resultMessage, playbtn);

  // inspecting
  console.log(randomChoice);
});
