let userScore = 0;
let ComputerScore = 0;
const jsConfetti = new JSConfetti();

let choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let userScoreMsg = document.getElementById("user-score");
let ComputerScoreMsg = document.getElementById("Computer-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");

    playGame(userChoice)
  });
});

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin === true) {
    userScore++;
    userScoreMsg.innerText = userScore;
    msg.innerText = `You Win!🥳 Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "#3dd28d";

    //confetti
    jsConfetti.addConfetti();
  } else {
    ComputerScore++;
    ComputerScoreMsg.innerText = ComputerScore;

    msg.innerText = `You Lost!😥 ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "#f32c52";
  }
};

const drawGame = () => {
  msg.innerText = "Game was Draw.😨 Play Again";
  msg.style.backgroundColor = "#353866";
};

const generateComputerChoice = () => {
  const option = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};

const playGame = (userChoice) => {
  //generate computer choice
  const computerChoice = generateComputerChoice();

  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      // scissors, paper
      userWin = computerChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      //rock, scissors
      userWin = computerChoice === "Scissors" ? false : true;
    } else {
      //rock, paper
      userWin = computerChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};
