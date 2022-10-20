const choiceArray = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(){
   let randomNum = Math.floor(Math.random() * 3);
   let randomResult = choiceArray[randomNum];
   return randomResult;
}
 //will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

