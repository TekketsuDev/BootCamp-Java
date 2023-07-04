const weapon = {
    Rock: { weakTo: 'Paper', strongTo: 'Scissors' },
    Paper: { weakTo: 'Scissors', strongTo: 'Rock' },
    Scissors: { weakTo: 'Rock', strongTo: 'Paper' }
};

const weaponNames = Object.keys(weapon);

let playerCount = 0;
let machineCount = 0;

const btn_rock = document.getElementById("btn_rock");
const btn_paper = document.getElementById("btn_paper");
const btn_scissors = document.getElementById("btn_scissors");

function machineDecision() {
    const randomIndex = Math.floor(Math.random() * weaponNames.length);
    return weaponNames[randomIndex];
}

function initGame() {
    btn_rock.onclick = function () {
        rockPaperScissors('Rock', machineDecision());
    }

    btn_paper.onclick = function () {
        rockPaperScissors('Paper', machineDecision());
    }

    btn_scissors.onclick = function () {
        rockPaperScissors('Scissors', machineDecision());
    }

}

function rockPaperScissors(playerDecision, enemyChoice) {
    console.log("Player : " + playerDecision);
    console.log("Computer : " + enemyChoice);

    if (weapon[playerDecision].strongTo === enemyChoice) {
        playerCount++;
    }
    if (weapon[playerDecision].weakTo === enemyChoice) {

        machineCount++;
    }
    // Update the scores
    document.getElementById("tablon").innerHTML = 'Player: ' + playerDecision + ' Computer: ' + enemyChoice;
    
    document.getElementById("scorePlayer").innerHTML = '🌸 Player :' + playerCount + ' 🌸';
    document.getElementById("scoreMachine").innerHTML = '🌸 Computer :' + machineCount + ' 🌸';
    // Check if the game has ended (one of the players has reached a score of 3)
    if (playerCount === 3 || machineCount === 3) {
      // Display the winner
    const winner = playerCount === 3 ? 'Player' : 'Computer';
    document.getElementById("tablon").innerHTML = `🏴 ${winner} wins! 🏴`;
      // Reset the scores for the next game
    playerCount = 0;
    machineCount = 0;
    }
}

document.getElementById("tablon").innerHTML = '🏴 Que comience el juego 🏴';
   // Call initGame() once to set up the button click events.
    window.onload = function() {
    initGame();
};