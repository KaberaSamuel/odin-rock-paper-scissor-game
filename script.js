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
const compchoice = document.querySelector("#c-choice");

// creating elements for inserting on a page
let resultMessage = document.createElement("p");

/* Experimenting
const doc = document.querySelector("body");
doc.addEventListener("click", (e) => {
  console.log(e.target, e.target.textContent);
});
*/

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
  // 1. choosing randomly computer choice
  const compChoices = ["rock", "paper", "scissors"];
  const randomChoice = choose(compChoices);

  if (randomChoice === "rock") {
    compchoice.textContent = "✊";
  }
  if (randomChoice === "paper") {
    compchoice.textContent = "🖐️";
  }
  if (randomChoice === "scissors") {
    compchoice.textContent = "✌️";
  }
});
