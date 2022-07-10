const ROCK="ROCK";
const PAPER="PAPER";
const SCISSORS= "SCISSOR";

let userinput = prompt('Enter ROCK | PAPER | SCISSOR').toUpperCase();
console.log(userinput);

if((userinput!= 'ROCK')&& (userinput!= 'PAPER')&&(userinput!= 'SCISSOR')){
    alert(
        `Wrong Input, please input a valid one. User has selected: ${userinput},Input automatically taken as PAPER`
    );
    userinput = 'PAPER';
}

function getComputerInput(){
    let rand= Math.random();
    let compInput;
    if(rand<0.37){
        compInput ='PAPER';
    } else if(rand < 0.68){
        compInput= 'ROCK';
    } else{
        compInput='SCISSOR';
    }
    return compInput;
}

let computerInput= getComputerInput();

if(userinput===computerInput){
    alert(
        `Draw! User Selected: ${userinput},
        Computer Selected: ${computerInput}`
    );
}
else if(
    (computerInput=== ROCK && userinput=== SCISSOR )
     || (computerInput=== PAPER && userinput=== ROCK )
      || (computerInput=== SCISSOR && userinput=== PAPER )){
    alert(
        `Computer Win! User Selected: ${userinput},
        Computer Selected: ${computerInput}`
    );
}
else{
    alert(
        `User Win! User Selected: ${userinput},
        Computer Selected: ${computerInput}`
    );
}