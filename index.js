import {
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  XSquaredCommand,
  XCubedCommand,
  PercentCommand,
  SquareRootCommand,
  CubeRootCommand,
  AbsoluteValueCommand,
  OneDividedByXCommand,
} from "./commands.js";

let currentOperand = "";
let previousOperand = "";
let operation = undefined;
let resultLocked = false;
let undoStack = [];

const calc = document.querySelector(".calculator");

function updateInput() {
  const input = document.querySelector("#input");
  input.value = currentOperand || "0";
}

function handleButtonClick(event) {
  const value = event.target.getAttribute("data-value");
  const type = event.target.getAttribute("data-type");
  if (type === "number") {
    appendNumber(value);
  } else if (type === "sign-change") {
    toggleSign();
  } else if (type === "percent") {
    caculatePercent();
  } else if (type === "operator") {
    chooseOperation(value);
  } else if (type === "clear") {
    clearInput();
  } else if (type === "equal") {
    calculateResult();
  } else if (type === "undo") {
    undo();
  } else if (type === "solo") {
    handleSolo(value);
  }
}

function handleSolo(value) {
  if (currentOperand === "") return;

  const prev = parseFloat(currentOperand);

  const soloCommandMap = {
    "x-squared": new XSquaredCommand(),
    "x-cubed": new XCubedCommand(),
    percent: new PercentCommand(),
    "square-root-from-x": new SquareRootCommand(),
    "cube-root-from-x": new CubeRootCommand(),
    "absolute-value": new AbsoluteValueCommand(),
    "one-divided-by-x": new OneDividedByXCommand(),
  };

  const soloCommand = soloCommandMap[value];

  const result = soloCommand.execute(prev);

  undoStack.push({
    command: soloCommand,
    result,
    prevOperand: previousOperand,
    currOperand: null,
    operation,
  });

  currentOperand = result.toString();
  updateInput();
  resultLocked = true;
}

function appendNumber(number) {
  if (resultLocked) {
    clearInput();
    resultLocked = false;
  }
  if (currentOperand === "" && number === "0") return;
  if (currentOperand === "" && number === "00") return;
  if (number === ".") {
    if (currentOperand === "") {
      currentOperand = "0.";
      updateInput();
      return;
    }

    if (currentOperand.includes(".")) return;
  }
  if (currentOperand.length > 20) return;
  currentOperand = currentOperand.toString() + number.toString();
  updateInput();
}

function toggleSign() {
  if (currentOperand === "") return;
  currentOperand = (parseFloat(currentOperand) * -1).toString();
  updateInput();
}

function chooseOperation(op) {
  if (currentOperand === "") {
    operation = op;
    return;
  }
  if (previousOperand !== "") calculateResult();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
  resultLocked = false;
}

function calculateResult() {
  if (!operation) return;

  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  const operationsMap = {
    "+": new AddCommand(),
    "-": new SubtractCommand(),
    "*": new MultiplyCommand(),
    "/": new DivideCommand(),
  };

  const operationCommand = operationsMap[operation];

  if (operationCommand) {
    result = operationCommand.execute(prev, curr);
  }

  if (result === "undefined") {
    currentOperand = result;
    updateInput();
    resultLocked = true;
    return;
  }

  undoStack.push({
    command: operationCommand,
    result,
    prevOperand: previousOperand,
    currOperand: currentOperand,
    operation,
  });

  currentOperand = result.toString();
  operation = undefined;
  previousOperand = "";
  updateInput();
  resultLocked = true;
}

function undo() {
  if (undoStack.length === 0) return;

  const lastCommand = undoStack.pop();

  const { command, result, prevOperand, currOperand } = lastCommand;

  const prev = command.undo(result, parseFloat(currOperand));

  currentOperand = prev.toString();
  previousOperand = prevOperand;
  operation = lastCommand.operation;
  updateInput();
  resultLocked = false;
}

function clearInput() {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
  updateInput();
}

calc.addEventListener("click", (e) => {
  if (!e.target.classList.contains("calc-button")) return;
  handleButtonClick(e);
});

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "classic" ? "mild" : "classic";
  setTheme(newTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "classic";
  setTheme(savedTheme);

  const themeButton = document.querySelector('button[data-type="color-theme"]');
  themeButton.addEventListener("click", toggleTheme);
});
