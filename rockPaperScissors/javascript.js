const choiceArray = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(){
   let randomNum = Math.floor(Math.random() * 3);
   let randomResult = choiceArray[randomNum];
   return randomResult;
}
 //will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
 let computerSelection = getComputerChoice();
 let playerSelection;

 while(playerSelection == undefined){
 let answer = prompt("Your move! Rock, paper or scissors?", "Type here:");
answer = answer[0].toUpperCase().concat(answer.substring(1).toLowerCase());
 
    if(choiceArray.indexOf(answer) < 0){
    alert("Hey! Only rock, paper or scissors, please!");
  
}else{
     playerSelection = answer;
}
}
let playerScore = 0;
let computerScore = 0;

let playRound = (computerSelection, playerSelection) => {

switch (true){
    case computerSelection===playerSelection:
        console.log("It's a tie!");
        alert("It's a tie!");
        break;
    
    case computerSelection === 'Rock' && playerSelection ==='Scissors':
        console.log("You Lose! Rock beats Scissors");
        alert("You Lose! Rock beats Scissors");
        computerScore+=1;
        break;
    
    case computerSelection === 'Paper' && playerSelection ==='Rock':
        console.log("You Lose! Paper beats Rock");
        alert("You Lose! Paper beats Rock");
        computerScore+=1;
        break;

    case computerSelection === 'Scissors' && playerSelection ==='Paper':
        console.log("You Lose! Scissors beats Paper");
        alert("You Lose! Scissors beats Paper");
        computerScore+=1;
        break;

    default:
        console.log("You WON this round!");
        alert("You WON this round!");
        playerScore+=1;

}

}

console.log(playRound(computerSelection, playerSelection));










