import './style.css';

export class Calculator {
  constructor(invoker) {
    this.invoker = invoker;
    this.calculator = document.querySelector('.calculator');

    this.calculator.addEventListener('click', (event) => {
      if (!event.target.classList.contains('calc-button')) return;

      const button = event.target;
      this.invoker.executeCommand(button.getAttribute('data-value'));
    });
  }

  static updateDisplay(value) {
    const display = document.querySelector('#input');

    if (display) {
      display.value = String(value).slice(0, 12);

      // if (type !== "number") {
      //     display.classList.add("blink");
      //
      //     setTimeout(() => {
      //       display.classList.remove("blink");
      //     }, 200);
      //   }
    }
  }
}
