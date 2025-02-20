export class Calculator {
    constructor(invoker) {
        this.invoker = invoker
        this.calculator = document.querySelector(".calculator");

        this.calculator.addEventListener("click", (event) => {
            if (!event.target.classList.contains("calc-button")) return;

            const button = event.target;
            console.log('button', button)
        });
    }

    static updateDisplay(value) {
        const display = document.querySelector('.display') ;

        if (display) {
            display.innerText = String(value).slice(0, 12);
        }
    }
}