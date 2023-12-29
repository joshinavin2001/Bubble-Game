//function to create hit values //
let Rn = 0;
let timer = 60;
let score = 0;
let clutter = "";
//function to create a hitValue //
function hitValues() {
  Rn = Math.floor(Math.random() * 10);
  document.querySelector(".hitval").innerHTML = Rn;
}

function setTimer() {
  let timerStop = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timerval").innerHTML = timer;
    } else {
      clearInterval(timerStop);
      document.querySelector(
        ".Panel_Bottom"
      ).innerHTML = `<div class="Game_Over">
                <h1>Game Over</h1>
                <button class="btn">Reset</button>
               </div>
              `;
      document.querySelector(".btn").addEventListener("click", function () {
        window.location.reload();
      });
    }
  }, 1000);
}

//function to increase a score //
function increaseScore() {
  score += 10;
  document.querySelector(".scoreval").innerHTML = score;
}

//function to create a Bubbles//
function createBubbles() {
  for (let i = 0; i <= 119; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="Bubble">
           ${rn}
        </div>`;
    document.querySelector(".Panel_Bottom").innerHTML = clutter;
  }
}
let startButton = document.querySelector(".btn1");
function startgame() {
  startButton.addEventListener("click", function () {
    hitValues();
    setTimer();
    createBubbles();
  });
}
startgame();

document
  .querySelector(".Panel_Bottom")
  .addEventListener("click", function (dets) {
    let clickedNumber = dets.target.textContent;
    if (Rn == clickedNumber) {
      increaseScore();
      hitValues();
    }
  });
