


/* Randomly return either Rock/Paper/Scissors
Should return the output before moving to next step*/

let choices = ["Rock","Paper","Scissors"];

function getComputerChoice(items) {
    return items[Math.floor(Math.random()*items.length)];
}

let computerSelect= getComputerChoice(choices);  





/*Play a single round. Take 2 parameters (playerSelection)
(computerSelection) then return a string that declares
round winner like: "You lost. Paper beats rock" 

Make your function’s playerSelection parameter case-insensitive 
(so users can input rock, ROCK, RocK or any other variation)

Return the result of calling this function, you need it later
*/

/*if (player= rock && computer=scissors) {
    return (you win. paper beats rock)}
    else if ....
} */


function playRound(playerSelection,computerSelection){

    playerSelection=playerSelection.toLowerCase()
    let result="";

    if ((playerSelection==="rock") && (computerSelection==="Scissors")){
        result="won";
        resultDisplayer.textContent = 'You won this round';
        return result;
    }

    else if ((playerSelection==="rock") && (computerSelection==="Paper")){
        result="lost";
        resultDisplayer.textContent = 'You lost this round';

        return result;

    }

    else if ((playerSelection==="rock") && (computerSelection==="Rock")){
        result="tie";
        resultDisplayer.textContent = 'Tie';

        return result;

    }

    else if ((playerSelection==="paper") && (computerSelection==="Scissors")){
        result="lost";
        resultDisplayer.textContent = 'You lost this round';

        return result;
    }

    else if ((playerSelection==="paper") && (computerSelection==="Rock")){
        result="won";
        resultDisplayer.textContent = 'You won this round';

        return result;
    }

    else if ((playerSelection==="paper") && (computerSelection==="Paper")){
        result="tie";
        resultDisplayer.textContent = 'Tie';

        return result;
    }

    else if ((playerSelection==="scissors") && (computerSelection==="Paper")){
        result="won";
        resultDisplayer.textContent = 'You won this round!';

        return result;
    }

    else if ((playerSelection==="scissors") && (computerSelection==="Rock")){
        result="lost";
        resultDisplayer.textContent = 'You lost this round';

        return result;
    }

    else if ((playerSelection==="scissors") && (computerSelection==="Scissors")){
        result="tie";
        resultDisplayer.textContent = 'Tie';

        return result;
    }
}



/*Call playRound function inside game() to play a SINGLE round game that keeps
score and report winner or loser at the end*/

/* 1.Get playerSelection from clickin each button!!!

2.If player won, playerCount = playerCount++ (display you won round)
    else = computerCount++ (display lost round)
    
4. 
    */



//NOT NEEDED AT STEP 2 OF REVISITING
function game(){


    let playerCount=0;
    let computerCount=0;

    function counter(value){
        if (value == "won"){
            playerCount++;
            console.log("You won this round");
        }
        else if (value =="lost"){
            computerCount++;
            console.log("You lost this round");
        }
    }
}

    




    //PLAY FIVE ROUNDS
   /* for (let i=0; i<5; i++){
        let playerChoice = prompt("Choose between paper, rock,scissors");
        counter(playRound(playerChoice,computerSelect));
    

    if (playerCount>computerCount){
        console.log("You won the match");
    }
    else{
        console.log("You lost the match");
    }

    */

/*No need to call it since we play just 1 round now
game(); */


/*Log result after each round + log final winner */





//USER INTERFACE

//PLAY SINGLE ROUND WHEN YOU CLICK A BUTTON and log result


let RockButton = document.getElementById('buttonRock');

RockButton.addEventListener("click", () =>{
    playRound("rock",computerSelect)});

    
let PaperButton = document.getElementById('buttonPaper');

PaperButton.addEventListener("click", () =>{
    playRound("paper",computerSelect)});   

    
let ScissorsButton = document.getElementById('buttonScissors');

ScissorsButton.addEventListener("click", () =>{
    playRound("scissors",computerSelect)});




//DIV FOR DISPLAYING RESULTS

const resultDisplayer = document.createElement('div');
resultDisplayer.classList.add('content');

document.body.appendChild(resultDisplayer);