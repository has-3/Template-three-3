/*
 ** Animate Width On Scrolling
 ** Video URL: https://youtu.be/sbIoIKI9FOc
 */

/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */
let skillsSection = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll (".the-progress span");
let progressSpansNums = document.querySelectorAll(".skill h3 .spanNum");
let started = false; // Function Started ? No
// ** Increase Numbers On Scrolling
let statsSection = document.querySelector(".stats");
let statsNums = document.querySelectorAll(".stats .number");
let startedStats = false;

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    // Skills Animate Width
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    })
    // Skills numbers % Animate
    if(!started){
      progressSpansNums.forEach((spanNum) => startCount(spanNum));
     }
    started = true;
  }
  if (window.scrollY >= statsSection.offsetTop - 250) {

    if(!startedStats){
      statsNums.forEach((number) => startCount2(number));
     }
    startedStats = true;
  }
};

function startCount(el) {
  let skill = el.dataset.skill;
  let count = setInterval (() => {
    el.textContent++;
    if (el.textContent == skill) {
      clearInterval(count)
    }
  }, 600 / el.dataset.skill );
}
function startCount2(el) {
  let goal = el.dataset.goal;
  let count = setInterval (() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count)
    }
  }, 2000 / el.dataset.goal );
}
/*
 ** Countdown Timer
 ** Video URL: https://www.youtube.com/watch?v=eFsiOTJrrE8
 */

// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date("oct 10, 2023 12:59:59").getTime();
// console .log(countDownDate);
let counter = setInterval(() => {
  // Get Date Now 
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  
  if (dateDiff <= 0) {
    clearInterval(counter);
    document.querySelector(".days").innerHTML = 0;
    document.querySelector(".hours").innerHTML = 0;
    document.querySelector(".minutes").innerHTML = 0;
    document.querySelector(".seconds").innerHTML = 0;
  }
}, 1000);
