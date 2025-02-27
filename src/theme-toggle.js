export class ThemeToggle {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            this.calculator = document.querySelector(".calculator");

            const savedTheme = localStorage.getItem("theme") || "classic";
            this.setTheme(savedTheme);

            const themeButton = document.querySelector('button[data-type="color-theme"]');
            themeButton.addEventListener("click", this.toggleTheme.bind(this));
        });
    }

    toggleTheme() {
        const currentTheme = this.calculator.getAttribute("data-theme");
        const newTheme = currentTheme === "classic" ? "mild" : "classic";
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        this.calculator.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
}