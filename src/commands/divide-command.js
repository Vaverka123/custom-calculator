import {Command} from "./command.js";

export class DivideCommand extends Command {
    execute(prev, curr) {
        if (curr === 0) {
            this.originalPrev = prev;
            return 'n/a: division by zero';
        }
        return prev / curr;
    }

    undo(result, curr) {
        if (result === 'n/a: division by zero') {
            return this.originalPrev;
        }
        return result * curr;
    }
}