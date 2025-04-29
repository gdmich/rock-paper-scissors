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