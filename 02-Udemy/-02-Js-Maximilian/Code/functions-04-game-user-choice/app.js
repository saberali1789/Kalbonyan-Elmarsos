const startGameBtn = document.getElementById('start-game-btn'); 
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const resultDraw = 'Its a draw'
const resultplayerwins= 'Its a player wining'
const resultcomWin = 'computer Wins'
const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function(){
  const randomValue = Math.random();
  if(randomValue < .34){
    return ROCK
  }else if(randomValue<67 ) {
    return SCISSORS
  } else {
    return PAPER
  }
}

const getWinner = (pchoice , cchoice)=>  pchoice === cchoice ? resultDraw : (pchoice ===ROCK && cchoice === SCISSORS )|| (pchoice === SCISSORS && cchoice === PAPER)||(pchoice === PAPER &&cchoice===ROCK) ? resultplayerwins : resultcomWin

// const getWinner = (pchoice, cchoice)=> {
//   if ( pchoice === cchoice){
//     return resultDraw
//   }else if( (pchoice ===ROCK && cchoice === SCISSORS )|| 
//             (pchoice === SCISSORS && cchoice === PAPER)||
//             (pchoice === PAPER &&cchoice===ROCK)){
//               return resultplayerwins
//             }else{
//               return resultcomWin
//             }
// }
startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice()
  const winner = getWinner(playerSelection,computerSelection)
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(winner);
});



