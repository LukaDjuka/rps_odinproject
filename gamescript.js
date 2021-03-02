let playerChoice = null;

let man_score = 0;
let machine_score = 0;


const comp_div = document.querySelector("#comp-choice");
let para = document.createElement("p");
let comp_img = document.createElement("img");


let options = document.querySelectorAll(".human-selectable");
options.forEach(option => option.addEventListener('click', setPlayerChoice))

document.querySelector("#confirm-anchor").addEventListener('click', confirmed);


function setPlayerChoice(e){
    if (e.target.attributes["data-option"].value === "Rock"){
        playerChoice = "Rock";
    }
    else if (e.target.attributes["data-option"].value === "Paper"){
        playerChoice = "Paper";
    }
    else if (e.target.attributes["data-option"].value === "Scissors"){
        playerChoice = "Scissors";
    }
    else if (e.target.attributes["data-option"].value === "Reset"){
        playerChoice = "Reset"
    }
    highlight_the_div(playerChoice);

    // ERASE THIS LINE AFTER!
    console.log(e.target.attributes["data-option"]);
}


function highlight_the_div(selected_option){
    options.forEach(option => {
        console.log(option.attributes);
        if (option.attributes["data-option"].value === selected_option){
            option.classList.add("selected-div")
        }
        else{
            option.classList.remove("selected-div")
        }
    })
}

function confirmed(){
    if (playerChoice === "Reset"){
        man_score = 0;
        machine_score = 0;
        document.querySelector("#man-score").textContent = `Man: ${man_score}`;
        document.querySelector("#machine-score").textContent = `Machine: ${machine_score}`;
        highlight_the_div();
    }
    else if (playerChoice != null){
        machinePlay();
    }
}

function machinePlay(){
    let get_move = Math.floor(Math.random() * 3);
    // const comp_div = document.querySelector("#comp-choice");
    // let para = document.createElement("p");
    // let comp_img;
    console.log(comp_div.childNodes.length);
    if (comp_div.childNodes.length > 0){
        comp_div.removeChild(para);
        comp_div.removeChild(comp_img);
    }
    if (get_move === 0){
        para.textContent = "Rock";
    }
    else if (get_move === 1){
        para.textContent = "Paper";
    }
    else{
        para.textContent = "Scissors";
    }
    let tie = updateScore(get_move)
    if (tie){
        para.textContent += "(Tie)";
    }
    comp_div.appendChild(para);
    comp_div.appendChild(comp_img);
}

function updateScore(computer_move){
    let tie = null;
    if (computer_move === 0){ //Rock
        if (playerChoice === "Scissors"){
            machine_score++;
            tie = false;
        }
        else if (playerChoice === "Paper"){
            man_score++;
            tie = false;
        }
        else {
            tie = true;
        }
    }
    else if (computer_move === 1){ //Paper
        if (playerChoice === "Rock"){
            machine_score++;
            tie = false;
        }
        else if (playerChoice === "Scissors"){
            man_score++;
            tie = false;
        }
        else{
            tie = true;
        }
    }
    else if (computer_move === 2){ //Scissors
        if (playerChoice === "Paper"){
            machine_score++;
            tie = false;
            
        }
        else if (playerChoice === "Rock"){
            man_score++;
            tie = false;
        }
        else{
            tie = true;
        }
    }
    document.querySelector("#man-score").textContent = `Man: ${man_score}`;
    document.querySelector("#machine-score").textContent = `Machine: ${machine_score}`;
    if (tie){
        return 1;
    }
    return 0;
}





// function computerPlay(){
//     let get_move = Math.floor(Math.random() * 3);
//     console.log(get_move);
//     if (get_move == 0){
//         return "Rock";
//     }
//     else if (get_move == 1){
//         return "Paper";
//     }
//     else{
//         return "Scissors";
//     }
// }

// function playRound(playerSelection, computerSelection){
//     playerSelection = playerSelection.toLowerCase();
//     if (playerSelection == "rock"){
//         switch (computerSelection){
//             case "Rock":
//                 return "You Tie!";
//             case "Paper":
//                 return "You Lose! Paper beats Rock!";
//             case "Scissors":
//                 return "You Win! Rock beats Scissors!";
//         }
//     }
//     else if (playerSelection == "paper"){
//         switch (computerSelection){
//             case "Rock":
//                 return "You Win! Paper beats Rock!";
//             case "Paper":
//                 return "You Tie!";
//             case "Scissors":
//                 return "You Lose! Scissors beats Paper!";
//         }
//     }
//     else{ // In this case the player chose "Scissors"
//         switch (computerSelection){
//             case "Rock":
//                 return "You Lose! Rock beats Scissors";
//             case "Paper":
//                 return "You Win! Scissors beats Paper!";
//             case "Scissors":
//                 return "You Tie!";
//         }
//     }
// }

// function game(){
//     let rounds_played = 0;
//     let player_wins = 0;
//     let computer_wins = 0;
//     let ties = 0;
//     while (rounds_played < 5){
//         let player_move = prompt("Please choose a move: 'Rock', 'Paper', 'Scissors'");
//         let computer_move = computerPlay();
//         let result_text = playRound(player_move, computer_move);
//         console.log(result_text);
//         if (result_text.charAt(4) == "W"){
//             player_wins++;
//         }
//         else if(result_text.charAt(4) == "L"){
//             computer_wins++;
//         }
//         else{
//             ties++;
//         }
//         console.log(`Current score is:
//         \n    Player: ${player_wins}
//         \n    Computer Wins: ${computer_wins}
//         \n    Ties: ${ties}`);
//         rounds_played++;
//     }
// }
// game();