var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question(`Welcome to rock, paper, scissors. Please type 'r', 'p', or 's' to make a choice.`, function(answer) {
  //TODO: Log the answer in a database

  if (answer === "r"){
    console.log('hmmm....looks like you picked "rock" ')
  } else if(
    answer === "s"){
      console.log('hmmm....looks like you picked "scissors" ')
    }else if(
       answer === "p"){
        console.log('hmmm....looks like you picked "paper" ')
      }
console.log("hmmm.....looks like its my turn")
  // console.log(`You chose 'rock'. Hmm...`) //(setTimeout for 5 seconds here to imagine the computer thinking));
  setTimeout(() => {
   Math.floor(Math.random() * 4);
}, 3000)
let p = 0;
let r = 1;
let s = 2;
let computer = Math.floor(Math.random() * 3);
console.log(computer)
  if  (computer === 1){
  console.log('hmmm....looks like I picked "rock" ')
} else if(
  computer === 2){
    console.log('hmmm....looks like I picked "scissors" ')
  }else if(
     computer === 0){
      console.log('Oh shit, I played "paper" ')
    }

    const outcome = (input) => {
      if( answer === r && computer === 2){
        console.log ("Player Wins!!")
      }
      else if( answer === p && computer === 2){
        console.log ("Computer Wins!!")
      }
      else if( answer === s && computer === 2){
        console.log ("It's a Tie!!")
      }
      else if( answer === r && computer === 1){
        console.log ("It's a Tie!!")
      }
      else if( answer === p && computer === 1){
        console.log ("Player Wins!!")
      }
      else if( answer === s && computer === 1){
        console.log ("Computer Wins!!")
      }
      else if( answer === r && computer === 0){
        console.log ("Computer Wins!!")
      }
      else if( answer === p && computer === 0){
        console.log ("It's A Tie!!")
      }
      else if( answer === s && computer === 0){
        console.log ("Player Wins!!!")
      }
    return outcome
    }

    outcome(answer);
    //Expected to log the winner or tie
  rl.close();
});
