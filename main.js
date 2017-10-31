alert("Would you like to play a game?")
alert("The Rules are: Rock beats Scissors, Paper Beats Rock and Scissors Beats Paper. Best of 5 rounds win")
var g = 1;
while (g < 6) {
  g++
}
var playerChoice = prompt("Choose Rock, Paper or Scissors")
var compChoice = Math.random();
  if (compChoice < 0.34){
    compChoice = "Rock"
  }if (compChoice <= 0.67){
    compChoice = "Paper"
  }else{
    compChoice = "Scissors"
  }
var battle = function(weapon1, weapon2){
  if (weapon1 === weapon2){
    return alert("Its a tie")
  }else if (weapon1 === "Rock"){
    if (weapon2 === "Scissors"){
      return alert("Player 1 Wins!")
  }else{
      return alert("Computer Wins")
    }

  }else if (weapon1 === "Paper"){
    if (weapon2 === "Rock"){
      return alert("Player 1 wins")
    }else {
      return alert("Computer Wins")
    }

  }else if (weapon1 === "Scissors"){
    if (weapon2 === "Paper"){
      return alert("Player 1 Wins")
    }else {
      return alert("Computer Wins")
    }
  }

}



battle(playerChoice, compChoice);
// alert("Player 1: " + playerChoice + " vs " + "Computer" + compChoice
//   "The Winner is:" + Winner + "Games Played: " + g + ". Score: " + playerChoiceScore + " vs " + compChoiceScore)
