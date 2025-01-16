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
  XPowByYCommand,
  YRootFromXCommand,
} from "./commands.js";
import "./style.css";

let currentOperand = "";
let previousOperand = "";
let operation = undefined;
let resultLocked = false;
let undoStack = [];
let memory = 0;

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
  } else if (type === "memory-add") {
    memoryAdd();
  } else if (type === "memory-subtract") {
    memorySubtract();
  } else if (type === "memory-recall") {
    memoryRecall();
  } else if (type === "memory-clear") {
    memoryClear();
  }

  if (type !== "number") {
    input.classList.add("blink");

    setTimeout(() => {
      input.classList.remove("blink");
    }, 200);
  }
}

function handleSolo(value) {
  if (currentOperand === "") return;

  const prev = parseFloat(currentOperand);

  const soloCommandMap = {
    "x-squared": new XSquaredCommand(),
    "x-cubed": new XCubedCommand(),
    "get-percent": new PercentCommand(),
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

  if (currentOperand === "" && number === "00") return;
  if (currentOperand === "" && number === "0") {
    currentOperand = "0";
    updateInput();
    return;
  }

  if (currentOperand === "0" && number === "00") return;
  if (currentOperand === "0" && number === "0") return;
  if (currentOperand === "0" && number === ".") {
    currentOperand = "0.";
    updateInput();
    return;
  }

  if (
    (currentOperand === "0" && number !== "0") ||
    (currentOperand === "0" && number !== "00")
  ) {
    currentOperand = number.toString();
    updateInput();
    return;
  }

  if (currentOperand === "" && number === ".") {
    currentOperand = "0.";
    updateInput();
    return;
  }

  if (currentOperand.includes(".") && number === ".") return;

  if (currentOperand.length < 20) {
    currentOperand = currentOperand + number.toString();
    updateInput();
  }
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
    "x-to-the-power-of-y": new XPowByYCommand(),
    "y-root-from-x": new YRootFromXCommand(),
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

function memoryAdd() {
  if (currentOperand !== "") {
    memory += parseFloat(currentOperand);
    currentOperand = "0";
    updateInput();
  }
}

function memorySubtract() {
  if (currentOperand !== "") {
    memory -= parseFloat(currentOperand);
    currentOperand = "0";
    updateInput();
  }
}

function memoryRecall() {
  currentOperand = memory.toString();
  updateInput();
}

function memoryClear() {
  memory = 0;
  currentOperand = "0";
  updateInput();
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
  calc.setAttribute("data-theme", theme);
};

const toggleTheme = () => {
  const currentTheme = calc.getAttribute("data-theme");
  const newTheme = currentTheme === "classic" ? "mild" : "classic";
  setTheme(newTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "classic";
  setTheme(savedTheme);

  const themeButton = document.querySelector('button[data-type="color-theme"]');
  themeButton.addEventListener("click", toggleTheme);
});
