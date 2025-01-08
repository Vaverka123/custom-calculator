const display = document.getElementById("input");

function appendToDisplay(value) {
  let currentValue = display.value;

  if (value === "," && currentValue.includes(",")) return;

  if (["+", "-", "*", "/", ","].includes(value) && currentValue === "") return;
  if (
    ["+", "-", "*", "/"].includes(value) &&
    ["+", "-", "*", "/"].includes(currentValue.slice(-1))
  )
    return;

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}
document.getElementById("zero").onclick = function () {
  appendToDisplay("0");
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
