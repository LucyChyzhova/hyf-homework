//When the button is clicked, get the value of the input. This value will be the amount of time the game should run.
let startBtn = false;
let counterS = 0;
let counterL = 0;

let confettiS;
let confetti;

const listenForClick = function (event) {
  const secSetup = document.getElementById("secSetup").value;

  if (secSetup === "" || secSetup <= 0) {
    const alertDiv = document.querySelector('.alert')
    const content = `
      <p>${'Fill up the time-window. It has to be more than 1'}</p>
    `

    alertDiv.innerHTML = content
    
    //alert("fill up the time-window. it has to be more than 1");
    return;
  }

  let durationOfOneGame = secSetup * 1000;
  document.getElementById("winnerS").innerText = "";
  document.getElementById("winnerL").innerText = "";

  if (confettiS) {
    confettiS.clear();
  }

  if (confetti) {
    confetti.clear();
  }

  let confettiSettingsS = { target: "my-canvasS" };
  confettiS = new ConfettiGenerator(confettiSettingsS);
  let confettiSettings = { target: "my-canvasL" };
  confetti = new ConfettiGenerator(confettiSettings);

  if (event.target.id === "startBtn") {
    startBtn = true;
  }

  setTimeout(() => {
    startBtn = false;
    alertDiv = document.querySelector('.alert')
    content = `
      <p>${'The game is over'}</p>
    `

    alertDiv.innerHTML = content
    
    //alert("the game is over");
    showScore("resultL", counterL, "player 2");
    showScore("resultS", counterS, "player 1");
    getWinner(counterL, counterS);
    clearCurrentGameData();
  }, durationOfOneGame);
};

function clearCurrentGameData() {
  counterS = 0;
  counterL = 0;
  document.getElementById("secSetup").value = "";
}

function checkKeyPressedL(evt) {
  if (evt.keyCode === 76 && startBtn != false) {
    console.log((counterL += 1));
  }
}

function checkKeyPressedS(evt) {
  if (evt.keyCode === 83 && startBtn != false) {
    console.log((counterS += 1));
  }
}

function showScore(elementId, score, player) {
  const element = document.getElementById(elementId);
  element.textContent = player + " score: " + score;
}

function getWinner(counterL, counterS) {
  if (counterL > counterS) {
    element = document.getElementById("winnerL");
    element.textContent = "You won !!!!";

    confetti.render();
  } else if (counterL < counterS) {
    element = document.getElementById("winnerS");
    element.textContent = "You won !!!!";

    confettiS.render();
  } else {
    alertDiv = document.querySelector('.alert')
    content = `
      <p>${'Player 1 and player 2 have the same score'}</p>
    `

    alertDiv.innerHTML = content
    //alert("player 1 and player 2 have the same score");
  }
}

document.getElementById("startBtn").addEventListener("click", listenForClick);
window.addEventListener("keydown", checkKeyPressedL, false);
window.addEventListener("keydown", checkKeyPressedS, false);
