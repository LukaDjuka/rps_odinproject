let playerChoice = null;

let man_score = 0;
let machine_score = 0;


const machine_div = document.querySelector("#machine-choice");
let para = document.createElement("p");


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

    // Debugging line
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
    console.log(machine_div.childNodes.length);
    if (machine_div.childNodes.length > 0){
        machine_div.removeChild(para);
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
    machine_div.appendChild(para);
}

function updateScore(machine_move){
    let tie = null;
    if (machine_move === 0){ //Rock
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
    else if (machine_move === 1){ //Paper
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
    else if (machine_move === 2){ //Scissors
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
