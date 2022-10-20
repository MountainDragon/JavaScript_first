const choiceArray = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(){
   let randomNum = Math.floor(Math.random() * 3);
   let randomResult = choiceArray[randomNum];
   return randomResult;
}
 //will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
 let computerSelection = getComputerChoice();
 let playerSelection;

 let answer = prompt("Your move! Rock, paper or scissors?", "Type here:");
answer = answer[0].toUpperCase().concat(answer.substring(1).toLowerCase());
 
    if(choiceArray.indexOf(answer) < 0){
    alert("Hey! Only rock, paper or scissors, please!");
  
}else{
     playerSelection = answer;
}









