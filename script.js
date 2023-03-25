let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

function PlayerPickRock(){
    let computer = Math.floor(Math.random() * 3);
    document.getElementById("vs").style.display="Block";
    document.getElementById("pixelRock").style.display = "block";
    document.getElementById("pixelPaper").style.display = "none";
    document.getElementById("pixelScissor").style.display = "none";

    if(computer === 0){
        document.getElementById("compRock").style.display = "block";
        document.getElementById("compPaper").style.display = "none";
        document.getElementById("compScissor").style.display = "none";
        document.getElementById("result").innerHTML = "It's a tie between the player and the computer";

        console.log('tie');
    }
    else if (computer === 1){
        document.getElementById("compPaper").style.display = "block";
        document.getElementById("compScissor").style.display = "none";
        document.getElementById("compRock").style.display = "none";
        document.getElementById("result").innerHTML = "Computer Wins , Player Loses"
        console.log('computer wins');
    }
    else{
        document.getElementById("compScissor").style.display = "block";
        document.getElementById("compRock").style.display = "none";
        document.getElementById("compPaper").style.display = "none";
        document.getElementById("result").innerHTML = "Player win this round!";
        console.log('player wins');
    }
}

function PlayerPickPaper(){
    let computer = Math.floor(Math.random() * 3);
    document.getElementById("vs").style.display="Block";

    document.getElementById("pixelPaper").style.display = "block";
    document.getElementById("pixelScissor").style.display = "none";
    document.getElementById("pixelRock").style.display = "none";
   
    if(computer === 0){
        document.getElementById("compPaper").style.display = "none";
        document.getElementById("compScissor").style.display = "none";  
        document.getElementById("compRock").style.display = "block"; 
        document.getElementById("result").innerHTML = "Player win this round!";

        console.log('player wins');
    }
    else if (computer === 1){
        document.getElementById("compScissor").style.display = "none";
        document.getElementById("compRock").style.display = "none";
        document.getElementById("compPaper").style.display = "block";
        document.getElementById("result").innerHTML = "It's a tie between the player and the computer";

        console.log('tie');
    }
    else{
        document.getElementById("compRock").style.display = "none";
        document.getElementById("compPaper").style.display = "none";
        document.getElementById("compScissor").style.display = "block";
        document.getElementById("result").innerHTML = "Computer Wins , Player Loses"
        console.log('computer wins');
    }
}

function PlayerPickScissor(){
    let computer = Math.floor(Math.random() * 3);
    document.getElementById("vs").style.display="Block";

    document.getElementById("pixelScissor").style.display = "block";
    document.getElementById("pixelRock").style.display = "none";
    document.getElementById("pixelPaper").style.display = "none";
    
    if(computer === 0){
        document.getElementById("compRock").style.display = "block"; 
        document.getElementById("compPaper").style.display = "none";
        document.getElementById("compScissor").style.display = "none";
        document.getElementById("result").innerHTML = "Computer Wins , Player Loses"
        console.log('computer wins');
    }
    else if (computer === 1){
        document.getElementById("compPaper").style.display = "block";
        document.getElementById("compScissor").style.display = "none";
        document.getElementById("compRock").style.display = "none";
        document.getElementById("result").innerHTML = "Player win this round!";

        console.log('player wins');
    }
    else{
        document.getElementById("compScissor").style.display = "block";
        document.getElementById("compRock").style.display = "none";
        document.getElementById("compPaper").style.display = "none";
        document.getElementById("result").innerHTML = "It's a tie between the player and the computer";
        console.log('tie');
    }
}


