let display = document.getElementById("display");
let buttons = document.getElementsByClassName("buttons")[0].children;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}
