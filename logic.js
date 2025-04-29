function getComputerChoice(){

    let roll = Math.floor(Math.random() * 3)

    if(roll === 0){

        return "rock";

    }
    else if(roll === 1){

        return "paper";

    }
    else if(roll === 2){

        return "scissors";
    }
}

function getHumanChoice(){

    let prediction = prompt("Rock, paper, scissors?: ");

    return prediction;

}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

        humanChoice = humanChoice.toLowerCase();
    
        if(humanChoice === computerChoice){
    
            console.log("Draw!");
    
        }
    
        if(humanChoice === "rock"){
            if(computerChoice === "paper"){
    
                computerScore++;
                console.log("You lose! Paper beats rock.");
            }
            else if(computerChoice === "scissors"){
    
                humanScore++;
                console.log("You win! Rock beats scissors.");
            }
        }
        else if(humanChoice === "paper"){
            if(computerChoice === "rock"){
    
                humanScore++;
                console.log("You win! Paper beats rock.")
            }
            else if(computerChoice === "scissors"){
    
                computerScore++;
                console.log("You lose! Scissors beats paper.");
            }
        }
        else if(humanChoice === "scissors"){
            if(computerChoice === "rock"){
    
                computerScore++;
                console.log("You lose! Rock beats scissors.");
            }
            else if(computerChoice === "paper"){
    
                humanScore++;
                console.log("You win! Scissors beats paper.");
            }
        }
    }

    for(i = 0; i <=4; i++){

        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)

    }
}