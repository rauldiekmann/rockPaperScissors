
/* Randomly return either Rock/Paper/Scissors
Should return the output before moving to next step*/

let choices = ["Rock","Paper","Scissors"]

function getComputerChoice(items) {
    return items[Math.floor(Math.random()*items.length)];
}



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
        result="won"
        return result;
    }

    else if ((playerSelection==="rock") && (computerSelection==="Paper")){
        result="lost"
        return result;
    }

    else if ((playerSelection==="rock") && (computerSelection==="Rock")){
        result="tie"
        return result;
    }

    else if ((playerSelection==="paper") && (computerSelection==="Scissors")){
        result="lost"
        return result;
    }

    else if ((playerSelection==="paper") && (computerSelection==="Rock")){
        result="won"
        return result;
    }

    else if ((playerSelection==="paper") && (computerSelection==="Paper")){
        return ("Tie");
    }

    else if ((playerSelection==="scissors") && (computerSelection==="Paper")){
        result="won"
        return result;
    }

    else if ((playerSelection==="scissors") && (computerSelection==="Rock")){
        result="lost"
        return result;
    }

    else if ((playerSelection==="scissors") && (computerSelection==="Scissors")){
        result="tie"
        return result;
    }
}



/*Call playRound function inside game() to play a 5 round game that keeps
score and report winner or loser at the end*/

/*1.Call to play 5 round (for loop)

1.5(prompt to get playerSelection)!!!

2.If player won, playerCount = playerCount++ (display you won round)
    else = computerCount++ (display lost round)


    
4. After the 5 calls, check round count
if playercount > computercount = return player  won
else = return player lost
    */



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

    for (let i=0; i<5; i++){
        let playerChoice = prompt("Choose between paper, rock,scissors");
        let computerSelect= getComputerChoice(choices);  
        counter(playRound(playerChoice,computerSelect));
    }

    if (playerCount>computerCount){
        console.log("You won the match");
    }
    else{
        console.log("You lost the match");
    }

}

game();


/*Log result after each round + log final winner */






