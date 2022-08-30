const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const cpu = document.querySelector('#cpu');

for (let button of buttons) {
    button.addEventListener('click', function playGame() {
        const cpuNum = Math.floor(Math.random() * 3) + 1;
        console.log('Entra', cpuNum, parseInt(button.id))
        if (cpuNum === parseInt(button.id)) {
            result.textContent = "Tie!"
        } else if (cpuNum === 1 && parseInt(button.id) === 2) {
            cpu.textContent = "Rock"
            result.textContent = "You win!"
        } else if (cpuNum === 1 && parseInt(button.id) === 3) {
            cpu.textContent = "Rock"
            result.textContent = "You loose!"
        } else if (cpuNum === 2 && parseInt(button.id) === 1) {
            cpu.textContent = "Paper"
            result.textContent = "You loose!"
        } else if (cpuNum === 2 && parseInt(button.id) === 3) {
            cpu.textContent = "Paper"
            result.textContent = "You win!"
        } else if(cpuNum === 3 && parseInt(button.id) === 1) {
            cpu.textContent = "Scissors"
            result.textContent = "You win!"
        } else if (cpuNum === 3 && parseInt(button.id) === 2) {
            cpu.textContent = "Paper"
            result.textContent = "You loose!"
        }
    });
    //button.addEventListener('click', cusLog);
}