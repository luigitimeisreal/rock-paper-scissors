console.log("Rock Paper Scissors");
console.log("1.- Rock, 2.- Paper, 3.- Scissors")

let cpuNum = Math.floor(Math.random() * 3);

const userNum = Number(prompt());

if (cpuNum === userNum) {
    console.log("Tie!")
} else if (cpuNum === 1 && userNum === 2) {
    console.log("Rock")
    console.log("You win!")
} else if (cpuNum === 1 && userNum === 3) {
    console.log("Rock")
    console.log("You loose!")
} else if (cpuNum === 2 && userNum === 1) {
    console.log("Paper")
    console.log("You loose!")
} else if (cpuNum === 2 && userNum === 3) {
    console.log("Paper")
    console.log("You win!")
} else if(cpuNum === 3 && userNum === 1) {
    console.log("Scissors")
    console.log("You win!")
} else if (cpuNum === 3 && userNum === 2) {
    console.log("Paper")
    console.log("You loose!")
}