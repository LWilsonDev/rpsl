
// choices in order as determined by the 2 dimensional results array
// Based on https://medium.com/@linlinghao/write-a-rock-paper-scissors-game-without-if-else-in-javascript-f7e4951de220

// User's move ->      Rock Paper Scissors Lizard Spock
// Computer   Rock      t     w      l       l      w
// |          Paper     l     t      w       w      l
// v          Scissors  w     l      t       l      w
//            Lizard
//            Spock

const results = [
  ['t', 'w', 'l', 'l', 'w'],
  ['l', 't', 'w', 'w', 'l'],
  ['w', 'l', 't', 'l', 'w'],
  ['w', 'l', 'w', 't', 'l'],
  ['l', 'w', 'l', 'w', 't']
]

const resultWords = {
  't': 'Tie',
  'w': 'Win',
  'l': 'Lose'
}


let options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

$(document).ready(function() {
    startGame();

  });
function startGame(){
  $('.btn').on('click', function() {
    let playerIndex = $(this).data('index');

    calculateResult(playerIndex);

  });
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}



function calculateResult(playerIndex){
  // Get random index for computer's move
  let compIndex = getRandomInt(0,4);
  // Find the corresponding word for that index
  let compWord = options[compIndex];
  console.log(compWord);
  // Find word for players move index
  let playerWord = options[playerIndex];
  console.log(playerWord);

  // Find result from array
  let userResult = results[compIndex][playerIndex];
  // Find word for the array result
  let resultWord = resultWords[userResult];
  console.log(resultWord);
  //showimage(userWord, compWord );
  return resultWord;
}

//function showimage(a, b){
//  $()
//}
