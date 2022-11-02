/* Randomly return either Rock/Paper/Scissors*/

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
        counter(result);
    }

    else if ((playerSelection==="rock") && (computerSelection==="Paper")){
        result="lost";
        counter(result);

    }

    else if ((playerSelection==="rock") && (computerSelection==="Rock")){
        result="tie";
        counter(result);

    }

    else if ((playerSelection==="paper") && (computerSelection==="Scissors")){
        result="lost";
        counter(result);
    }

    else if ((playerSelection==="paper") && (computerSelection==="Rock")){
        result="won";
        counter(result);
    }

    else if ((playerSelection==="paper") && (computerSelection==="Paper")){
        result="tie";
        counter(result);
    }

    else if ((playerSelection==="scissors") && (computerSelection==="Paper")){
        result="won";
        counter(result);
    }

    else if ((playerSelection==="scissors") && (computerSelection==="Rock")){
        result="lost";
        counter(result);
    }

    else if ((playerSelection==="scissors") && (computerSelection==="Scissors")){
        result="tie";
        counter(result);
    }
    
}



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



//DIV FOR DISPLAYING LAST ROUND RESULT

const roundResult = document.createElement('div');
roundResult.classList.add('content');
document.body.appendChild(roundResult);


//DIVS FOR DISPLAYING RUNNING SCORE

const playerScore = document.createElement('div');
playerScore.classList.add('content');
document.body.appendChild(playerScore);

const computerScore = document.createElement('div');
computerScore.classList.add('content');
document.body.appendChild(computerScore);




//PLAY FIVE ROUNDS + DISPLAY RUNNING SCORE + ANNOUNCE WINNER OF A GAME




    

function counter(value){

    let playerCount=0;
    let computerCount=0;

    if (value == "won"){
            playerCount++;
            roundResult.textContent = 'You won this round';
            playerScore.textContent = `Player score =  ${playerCount} `
            computerScore.textContent = `Computer score =  ${computerCount} `
        }
    else if (value =="lost"){
            computerCount++;
            roundResult.textContent ="You lost this round";
            playerScore.textContent = `Player score =  ${playerCount} `
            computerScore.textContent = `Computer score =  ${computerCount} `
        }
    else if (value =="lost"){
            roundResult.textContent ="Tie";
            playerScore.textContent = `Player score =  ${playerCount} `
            computerScore.textContent = `Computer score =  ${computerCount} `
        }
    }



    
/*
    if (playerCount>computerCount){
        console.log("You won the match");
    }
    else{
        console.log("You lost the match");
    }

    */