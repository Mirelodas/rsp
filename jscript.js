function getComputerChoice(){
    let choices = ['Rock', 'Scissors', 'Paper'];
    let result = Math.floor(Math.random() * choices.length);
    return choices[result];
}

console.log(getComputerChoice());