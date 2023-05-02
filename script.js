/*Exercise 1
Write a function that mimics the behaviour of a typewriter.
Using setInterval display the word Wilson-2 one character at a time (one letter per second). 
Once the word is written on the screen clear the interval.
If you care about making it pretty, add a transition effect on the character apparition */

let word = "Wilson-2";
let affichage = document.getElementById("affichage");

function typewriter() {
  let i = 0;
  let interval = setInterval(() => {
    affichage.innerHTML += word.charAt(i);
    i++;
    if (i >= word.length) {
      clearInterval(interval);
      affichage.classList.add("done");
    }
  }, 1000);
}

typewriter();