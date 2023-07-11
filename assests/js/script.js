let colorPicker = document.querySelector("#color-picker");
let progressiveBar = document.querySelector("#progressive-bar");

let rainbow = document.querySelector("#rainbow");
let erase = document.querySelector("#erase");
let clear = document.querySelector("#clear");
let reset = document.querySelector("#reset");
let lightness = document.querySelector("#lightness");
let darkness = document.querySelector("#darkness");

let progressiveBarValue = document.querySelector("#progressive-bar-value");

// log  all

console.log(colorPicker);
console.log(progressiveBar);
console.log(rainbow);
console.log(erase);
console.log(clear);
console.log(reset);
console.log(lightness);
console.log(darkness);

// add event listener click event log all values

colorPicker.addEventListener("click", function () {
  console.log(colorPicker.value);
});

progressiveBar.addEventListener("click", function () {
 progressiveBarValue.textContent = `${progressiveBar.value} x ${progressiveBar.value}`;
});

rainbow.addEventListener("click", function () {
  console.log(rainbow.value);
});

erase.addEventListener("click", function () {
  console.log(erase.value);
});

clear.addEventListener("click", function () {
  console.log(clear.value);
});

reset.addEventListener("click", function () {
  console.log(reset.value);
});

lightness.addEventListener("click", function () {
  console.log(lightness.value);
});

darkness.addEventListener("click", function () {
  console.log(darkness.value);
});
