let playerSelection;
let playerScore = 0;
let computerScore = 0;

const playerScoreBoard = document.querySelector('#playerScore');
playerScoreBoard.textContent = "Player Score: " + playerScore;
const computerScoreBoard = document.querySelector('#computerScore');
computerScoreBoard.textContent = "Computer Score: " + computerScore;

const gameButtons = document.querySelectorAll('button');
gameButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playRound(button.id);
  })
})

function playRound(playerSelection) {
  let computerOptions = ["rock", "paper", "scissors"];
  let computerSelection = computerOptions[Math.floor(Math.random() * 3)];
  switch (playerSelection) {
    case ("rock"):
      if (computerSelection == "rock") {
        result = "draw";
      }
      if (computerSelection == "paper") {
        result = "lose";
      }
      if (computerSelection == "scissors") {
        result = "win";
      }
      break;
    case ("paper"):
      if (computerSelection == "rock") {
        result = "win";
      }
      if (computerSelection == "paper") {
        result = "tie";
      }
      if (computerSelection == "scissors") {
        result = "lose";
      }
      break;
    case ("scissors"):
      if (computerSelection == "rock") {
        result = "lose";
      }
      if (computerSelection == "paper") {
        result = "win";
      }
      if (computerSelection == "scissors") {
        result = "tie";
      }
      break;
  }

  if (result == "win") {
    playerScore++;
    playerScoreBoard.textContent = "Player Score: " + playerScore;
    if (playerScore == 5) {
      let cont = alert("You Win!");
      playerScore = 0;
      computerScore = 0;
      playerScoreBoard.textContent = "Player Score: " + playerScore;
      computerScoreBoard.textContent = "Computer Score: " + computerScore;
    } else {
      alert(result);
    }
  } else if (result == "lose") {
    computerScore++;
    computerScoreBoard.textContent = "Computer Score: " + computerScore;
    if (computerScore == 5) {
      let cont = alert("You Lose!");
      playerScore = 0;
      computerScore = 0;
      playerScoreBoard.textContent = "Player Score: " + playerScore;
      computerScoreBoard.textContent = "Computer Score: " + computerScore;
    } else {
      alert(result);
    }
  } else {
    alert(result);
  }
  return result;
}
