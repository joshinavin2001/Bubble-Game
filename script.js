//evnt bubbling//
//jispe click karoge wo element par event raise hoga,aur event listner na milne par event parent ke parent ke parent  par listner dhundega //

// //function to make timer//
// function runTimer() {
//   let timer = 60;
//   let timerStop = setInterval(function () {
//     if (timer > 0) {
//       timer--;
//       document.querySelector(".timerval").innerHTML = timer;
//     } else {
//       clearInterval(timerStop);
//     }
//   }, 1000);
// }
// runTimer();
// // var hitrn=0
// // function to make getNewHit //
// function getNewHit() {
//   hitrn = Math.floor(Math.random() * 10);
//   document.querySelector(".hitval").innerHTML = hitrn;
// }
// getNewHit();

// //function to increase score//
// let score = 0;
// function increaseScore() {
//   score += 10;
//   document.querySelector(".scoreval").innerHTML = score;
// }
// increaseScore();

// let clutter = "";
// let PanelBottom = document.querySelector(".Panel_Bottom");
// PanelBottom.addEventListener("click",function(dets){
//   let clickedNumber=Number(dets.target.textContent)
//   if(clickedNumber===hitrn){
//  increaseScore()
//   }
// })

// //function to make bubbles //
// function makeBubbles() {
//   for (let i = 0; i <= 72; i++) {
//     let rn = Math.floor(Math.random() * 70);
//     clutter += `<div class="Bubble">${rn}</div>`;
//   }
//   PanelBottom.innerHTML = clutter;
// }
// makeBubbles();

let timer = 6;
let hitrn = 0;
let score = 0;
let clutter = "";
//function to make timer //
function settimer() {
  let timerStop = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timerval").textContent = timer;
    } else {
      clearInterval(timerStop);
      document.querySelector(".Panel_Bottom").innerHTML = `<h1>Game Over </h1>
            <button class="btn">Reset</button>`;
      document.querySelector(".btn").addEventListener("click", function () {
        // settimer();
       
        increaseHitval();
        //   increaseScore()

        createBubbles();
      
       
        // settimer()
      });
    }
  }, 1000);


}
if(timer==0){
    // // document.querySelector(".timerval").textContent=60
     settimer()
    
//   document.querySelector(".timerval").textContent = timer;
}
//function make a hit //
function increaseHitval() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector(".hitval").textContent = hitrn;
}

//function to increaseScore //
function increaseScore() {
  score += 10;
  document.querySelector(".scoreval").textContent = score;
}

//function to create a bubbles //
function createBubbles() {
  for (let i = 0; i <= 70; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="Bubble">${rn}</div>`;
    document.querySelector(".Panel_Bottom").innerHTML = clutter;
  }
}
document
  .querySelector(".Panel_Bottom")
  .addEventListener("click", function (dets) {
    let clickedNumber = Number(dets.target.textContent);
    if (clickedNumber === hitrn) {
      increaseScore();
      increaseHitval();
    }
  });

//reset //

settimer();

increaseHitval();
// increaseScore()
createBubbles();
