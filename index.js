import {
  Command,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  PercentCommand,
} from "/commands.js";

const display = document.getElementById("input");

let leftOperand = null;
let rightOperand = null;
let operator = null;
let operatorClicked = false;
let history = [];

function clearDisplay() {
  display.value = "";
  leftOperand = null;
  rightOperand = null;
  operator = null;
  operatorClicked = false;
}

function appendToDisplay(value) {
  let currentValue = display.value;

  if (value === "," && currentValue.includes(",")) return;

  if (
    ["+", "-", "*", "/", ",", "0", "00", "%"].includes(value) &&
    currentValue === ""
  )
    return;

  if (
    ["+", "-", "*", "/", "%"].includes(value) &&
    ["+", "-", "*", "/", "%"].includes(currentValue.slice(-1))
  )
    return;

  display.value += value;
}

function handleOperator(op) {
  if (leftOperand !== null && display.value !== "") {
    calculate();
  }

  if (display.value === "") {
    operator = op;
    operatorClicked = true;
    return;

    if (leftOperand === null) {
      leftOperand = parseFloat(display.value);
      display.value = "";

      operator = op;
      display.value = "";
    }

    operatorClicked = true;
  }
}

function calculate() {
  if (leftOperand !== null && operator !== null && display.value !== "") {
    rightOperand = parseFloat(display.value);

    let command = null;
    let result = null;

    switch (operator) {
      case "+":
        command = new AddCommand(leftOperand, rightOperand);
        break;
      case "-":
        command = new SubtractCommand(leftOperand, rightOperand);
        break;
      case "*":
        command = new MultiplyCommand(leftOperand, rightOperand);
        break;
      case "/":
        command = new DivideCommand(leftOperand, rightOperand);
        break;
      case "%":
        command = new PercentCommand(leftOperand, rightOperand);
        break;
      default:
        return;
    }

    try {
      result = command.execute();
      display.value = result;
      history.push(command);
    } catch (error) {
      alert(error.message);
      clearDisplay();
      return;
    }

    leftOperand = result;
    rightOperand = null;
    // operator = null;
  }
}

document.getElementById("zero").onclick = function () {
  appendToDisplay("0");
};
document.getElementById("double-zero").onclick = function () {
  appendToDisplay("00");
};
document.getElementById("one").onclick = function () {
  appendToDisplay("1");
};
document.getElementById("two").onclick = function () {
  appendToDisplay("2");
};
document.getElementById("three").onclick = function () {
  appendToDisplay("3");
};
document.getElementById("four").onclick = function () {
  appendToDisplay("4");
};
document.getElementById("five").onclick = function () {
  appendToDisplay("5");
};
document.getElementById("six").onclick = function () {
  appendToDisplay("6");
};
document.getElementById("seven").onclick = function () {
  appendToDisplay("7");
};
document.getElementById("eight").onclick = function () {
  appendToDisplay("8");
};
document.getElementById("nine").onclick = function () {
  appendToDisplay("9");
};
document.getElementById("dot").onclick = function () {
  appendToDisplay(",");
};

document.getElementById("ac").onclick = function () {
  clearDisplay();
};

document.getElementById("add-sign").onclick = () => handleOperator("+");
document.getElementById("substract").onclick = () => handleOperator("-");
document.getElementById("multiply").onclick = () => handleOperator("*");
document.getElementById("division").onclick = () => handleOperator("/");
document.getElementById("percent").onclick = () => handleOperator("%");

document.getElementById("equal").onclick = function () {
  calculate();
};
