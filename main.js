alert("Would you like to play a game?")
alert("The Rules are: Rock beats Scissors, Paper Beats Rock and Scissors Beats Paper. Best of 5 rounds win")

var playerScore = 0;
var compScore = 0;

var g = 1;
while (g < 6) {

var playerChoice = prompt("Choose Rock, Paper or Scissors")
var compChoice = Math.random();
  if (compChoice < 0.34){
    compChoice = "Rock";
  }if (compChoice <= 0.67){
    compChoice = "Paper";
  }else{
    compChoice = "Scissors";
  }

var battle = function(weapon1, weapon2){
  if (weapon1 === weapon2){
    return alert("Its a tie")
  }else if (weapon1 === "Rock"){
    if (weapon2 === "Scissors"){
      playerScore += 1;
      return alert("Player 1 Wins! Player Score" + playerScore);
  }else{
      compScore += 1;
      return alert("Computer Wins Computer Score " + compScore)
    }

  }else if (weapon1 === "Paper"){
    if (weapon2 === "Rock"){
      playerScore += 1;
      return alert("Player 1 Wins")
    }else{
      compScore += 1;
      return alert("Computer Wins")
    }

  }else if (weapon1 === "Scissors"){
    if (weapon2 === "Paper"){
      playerScore += 1;
      return alert("Player 1 Wins")
    }else{
      compScore += 1;
      return alert("Computer Wins")
    }
  }
}


battle(playerChoice, compChoice);
alert("The score is: Player1: " + playerScore + " vs. Computer: " + compScore);
g++

}
var Winner = function(Score1, Score2) {
  if (Score1 === Score2) {
    return gameScore = "tie!, You're both losers"
  } else if (Score1 > Score2){
    return gameScore = "You win. Well done!"
  }else {
    return gameScore = "You lost to a computer, you suck"
  }
}

Winner(playerScore, compScore);
alert("The winner is:" + gameScore)
