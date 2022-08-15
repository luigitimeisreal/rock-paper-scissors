const cpuNum = Math.floor(Math.random() * 3);
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const cpu = document.querySelector('#cpu');

function playGame(cpuNum, userNum) {
    if (cpuNum === userNum) {
        result.textContent = "Tie!"
    } else if (cpuNum === 1 && userNum === 2) {
        cpu.textContent = "Rock"
        result.textContent = "You win!"
    } else if (cpuNum === 1 && userNum === 3) {
        cpu.textContent = "Rock"
        result.textContent = "You loose!"
    } else if (cpuNum === 2 && userNum === 1) {
        cpu.textContent = "Paper"
        result.textContent = "You loose!"
    } else if (cpuNum === 2 && userNum === 3) {
        cpu.textContent = "Paper"
        result.textContent = "You win!"
    } else if(cpuNum === 3 && userNum === 1) {
        cpu.textContent = "Scissors"
        result.textContent = "You win!"
    } else if (cpuNum === 3 && userNum === 2) {
        cpu.textContent = "Paper"
        result.textContent = "You loose!"
    }
}

for (let button of buttons) {
    button.addEventListener('click', playGame(cpuNum, button.id));
}