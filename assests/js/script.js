let colorPicker = document.querySelector("#color-picker");
let progressIndicator = document.querySelector("#progress-indicator");

let rainbowBtn = document.querySelector("#rainbow");
let eraseBtn = document.querySelector("#erase");
// let clearBtn = document.querySelector("#clear");
let resetBtn = document.querySelector("#reset");
let lightnessBtn = document.querySelector("#lightness");
let darknessBtn = document.querySelector("#darkness");

let progressBarValue = document.querySelector("#progress");

let canvas = document.querySelector("#canvas");

// function calling with variables
let currentColorPickerColor = "#000000";
let progressBarPercentage = 16;

let randomRainbowColor;
let isRainbow = false;

// Functions

function getColor() {
  isRainbow = false;

  currentColorPickerColor = colorPicker.value;
  return colorPicker.value;
}

function getProgressBarValue() {
  progressBarPercentage = progressIndicator.value;
  progress.textContent = `${progressIndicator.value} x ${progressIndicator.value}`;
  return progressBarValue.value;
}

function lightness() {}
function darkness() {}

function randomColor() {
  randomRainbowColor = Math.floor(Math.random() * 255 + 1);
  return randomRainbowColor;
}

function rainbow() {
  let red = randomColor();
  let green = randomColor();
  let blue = randomColor();
  let rgb = `rgb(${red}, ${green}, ${blue})`;
  currentColorPickerColor = rgb;
  isRainbow = true;
}

function erase() {
  isRainbow = false;

  currentColorPickerColor = "#ffffff";
}

function reset() {
  location.reload();
}

function setCanvas() {
  setUi();
}

function setUi() {
  for (let i = 0; i < progressBarPercentage; i++) {
    // style for canvas
    canvas.style.display = "grid";
    canvas.style.gridTemplateColumns = `repeat(${progressBarPercentage}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${progressBarPercentage}, 1fr)`;
    // creating child div for canvas
    let grid = document.createElement("div");
    grid.classList.add("grid-item");
    canvas.appendChild(grid);
    grid.addEventListener("mouseover", function () {
      grid.style.backgroundColor = currentColorPickerColor;

      if (isRainbow) {
        rainbow();
      }
    });
  }
}

// Event Listeners
colorPicker.addEventListener("change", getColor);

progressIndicator.addEventListener("click", getProgressBarValue);

rainbowBtn.addEventListener("click", rainbow);

eraseBtn.addEventListener("click", erase);

// clearBtn.addEventListener("click", clear);

resetBtn.addEventListener("click", reset);

// lightnessBtn.addEventListener("click", lightness);

// darknessBtn.addEventListener("click", darkness);

canvas.addEventListener("mouseover", setCanvas);
