// script.js
let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    const result = Function('"use strict";return (' + display.value + ')')();
    display.value = result;
  } catch (err) {
    display.value = "Error";
  }
}
