let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){

        return "Draw!";

    }

    if(humanChoice === "rock"){
        if(computerChoice === "paper"){

            computerScore++;
            return "You lose! Paper beats rock.";
        }
        else if(computerChoice === "scissors"){

            humanScore++;
            return "You win! Rock beats scissors."
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){

            humanScore++;
            return "You win! Paper beats rock."
        }
        else if(computerChoice === "scissors"){

            computerScore++;
            return "You lose! Scissors beats paper."
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){

            computerScore++;
            return "You lose! Rock beats scissors."
        }
        else if(computerChoice === "paper"){

            humanScore++;
            return "You win! Scissors beats paper."
        }
    }

}