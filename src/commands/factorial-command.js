import {Command} from "./command.js";

export class FactorialCommand extends Command {
    execute(curr) {
        curr;
        if (curr < 0) return 'n/a: factorial of negative number';
        if (curr === 0 || curr === 1) return 1;

        let result = 1;
        for (let i = 2; i <= curr; i++) {
            result *= i;
        }
        return result;
    }

    undo(result, curr) {
        return curr;
    }
}