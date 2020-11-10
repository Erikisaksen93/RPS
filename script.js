// model

const appField = document.getElementById('app');
const inputField = document.getElementById('userinput');
const computer = document.getElementById('computer');
const scores = document.getElementById('scores');
let computerChoice = [];
let userChoice = [];

// view

updateView();
function updateView() {
    document.getElementById('userinput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && (inputField.value.toLowerCase() === 'rock' || inputField.value.toLowerCase() === 'paper' || inputField.value.toLowerCase() === 'scissor' || inputField.value === 'juks')) {
            console.log(inputField.value)
            userChoice.push(inputField.value.toLowerCase())
            inputField.value = '';
            computerChoice.push(getComputerChoice());
            computer.innerHTML = computerChoice;
            scores.innerHTML = `
                               You selected ${userChoice}! </br>
                               Computer selected ${computerChoice}! </br>
                               </br>
                               </br>
                               Outcome: ${getWinner()}
                                `
        
            
        } 
        userChoice.pop();
        computerChoice.pop();
    })
}

// controller
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
        default:
            return 'Error'
    }
}

function getWinner (user, computer) {
    user = userChoice[0];
    computer = computerChoice[0]
    
    if (user === computer) {
        return 'This game is a tie';
    }
    if (user === 'rock') {
        if (computer === 'paper') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }

    if (user === 'paper') {
        if (computer === 'scissor') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }

    if (user === 'scissor') {
        if (computer === 'rock') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }

    if (user === 'juks') {
        return 'Congratulations you fucking cheater, you won!'
    }
    updateView();
};



