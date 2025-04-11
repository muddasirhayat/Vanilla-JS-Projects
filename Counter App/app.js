// Select the value and the 
const value = document.querySelector(".value");
const btnI = document.querySelector(".inc-btn");
const btnD = document.querySelector(".dec-btn");
const btnR = document.querySelector(".res-btn");

// Increase Button;

btnI.addEventListener("click", function () {
  let num = 1;    
  if (num > 0) {
    let count = 2;
    for (let index = 0; index <= count; index++) {
      value.textContent++;
      if (value.textContent > 0) {
        value.style.color = "green"
      }
    }}});

// Decrease Button;

btnD.addEventListener("click", function () {
  let num = 1;
  if (num > 0) {
    let count = 0;
    for (let index = 0; index <= count; index++) {
      value.textContent--;
      if (value.textContent < 0 ) {
        value.style.color = "red"
      }}}});

// Reset Button;

btnR.addEventListener("click", function () {
  value.textContent = 0;
  value.style.color = "black"
});




