const choiceArray = ['Rock', 'Paper', 'Scissors'];
let computerArray = [];


function getComputerChoice(){
   let randomNum = Math.floor(Math.random() * 3);
   let randomResult = choiceArray[randomNum];
   return randomResult;
}
 //will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
 let computerSelection;

 for(let c=0; c<5; c++){
   computerSelection = getComputerChoice();
   computerArray.push(computerSelection);
}
console.log(computerArray);

let playerScore = 0;
let computerScore = 0;

let game = (computerArray)=>{

for(let g=0; g<5; g++){
 let playerSelection;

 while(playerSelection == undefined){
 let answer = prompt("Your move! Rock, paper or scissors?", "Type here:");
answer = answer[0].toUpperCase().concat(answer.substring(1).toLowerCase());
 
    if(choiceArray.indexOf(answer) < 0){
    alert("Hey! Only rock, paper or scissors, please!");
  
}else{
     playerSelection = answer;
}}

let playRound = (computerArray, playerSelection) => {

    switch (true){
        case computerArray[g]===playerSelection:
            console.log("It's a tie in this round!");
            alert("It's a tie!");
            break;
        
        case computerArray[g] === 'Rock' && playerSelection ==='Scissors':
            console.log("You`ve lost this round! Rock beats Scissors");
            alert("You Lose! Rock beats Scissors");
            computerScore+=1;
            break;
        
        case computerArray[g] === 'Paper' && playerSelection ==='Rock':
            console.log("You`ve lost this round! Paper beats Rock");
            alert("You Lose! Paper beats Rock");
            computerScore+=1;
            break;
    
        case computerArray[g] === 'Scissors' && playerSelection ==='Paper':
            console.log("You`ve lost this round! Scissors beats Paper");
            alert("You Lose! Scissors beats Paper");
            computerScore+=1;
            break;
    
        default:
            console.log("You WON this round!");
            alert("You WON this round!");
            playerScore+=1;
    
    }
    
    }

    playRound(computerArray, playerSelection);

    
}



}

game(computerArray);

let result = (playerScore < computerScore)? "Game over and you`ve LOST!":
(playerScore > computerScore)? "You WON this game!!!":
"It`s a tie!";

console.log("Player: "+playerScore+" Computer: "+computerScore+" "+result);
alert("Player: "+playerScore+" Computer: "+computerScore+" "+result);















