/*Exercise 1
Write a function that mimics the behaviour of a typewriter.
Using setInterval display the word Wilson-2 one character at a time (one letter per second). 
Once the word is written on the screen clear the interval.
If you care about making it pretty, add a transition effect on the character apparition */

let word = "Wilson-2";
let affichage = document.getElementById("affichage");//

function typewriter() {
  let i = 0;
  let interval = setInterval(() => {
    affichage.innerHTML += word.charAt(i);
    i++;
    if (i >= word.length) {  //add condition to stop setInterval when word is completed
      clearInterval(interval);
      affichage.classList.add("done");
    }
  }, 1000);
}

typewriter();

/*  Exercise 2
Write a function that displays every second that has passed on the page since it was opened.
The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed",
 then "2 minutes have passed" (for 120 seconds and more), etc.
Feel free to once again, add a transition effect! ( a different one this time of course)
*/
let seconds = 0;
let timer = document.getElementById("timer");

function chrono() {
  seconds++;

  let timeStr = `${seconds} seconde${seconds > 1 ? 's' : ''}`;

  if (seconds % 60 == 0) {
    let minutes = seconds / 60;
    if (minutes == 1) {
      timeStr = "1 minute has passed";
    } else {
      timeStr = `${minutes} minutes have passed`;
    }
  }

  timer.innerHTML = timeStr;

  if (seconds % 10 == 0) {
    timer.classList.add('animate');
  } else {
    timer.classList.remove('animate');
  }
}

setInterval(chrono, 1000);