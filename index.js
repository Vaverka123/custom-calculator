let currentOperand = "";
let previousOperand = "";
let operation = undefined;
let resultLocked = false;

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
  }
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
  currentOperand = currentOperand.toString() + number.toString();
  updateInput();
}

function toggleSign() {
  if (currentOperand === "") return;
  currentOperand = (parseFloat(currentOperand) * -1).toString();
  updateInput();
}

function caculatePercent() {
  if (currentOperand === "") return;
  currentOperand = (parseFloat(currentOperand) * 0.01).toString();
  updateInput();
  resultLocked = true;
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
  console.log(
    "op",
    op,
    "currentOperand",
    currentOperand,
    "previousOperand",
    previousOperand
  );
}

function calculateResult() {
  if (!operation) return;

  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      if (curr === 0) {
        currentOperand = "undefined";
        updateInput();
        resultLocked = true;
        return;
      }
      result = prev / curr;
      break;
    default:
      return;
  }
  currentOperand = result.toString();
  operation = undefined;
  previousOperand = "";
  updateInput();
  resultLocked = true;
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
  document.documentElement.className = theme;
};

document.addEventListener("DOMContentLoaded", () => {
  const themeButtons = document.querySelectorAll(
    'button[data-type="color-theme"]'
  );

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.querySelector("img").alt.includes("bright")) {
        setTheme("bright");
        button.style.display = "none";
        button.nextElementSibling.style.display = "block";
      } else if (button.querySelector("img").alt.includes("dark")) {
        setTheme("dark");
        button.style.display = "none";
        button.previousElementSibling.style.display = "block";
      }
    });
  });
});
