import {Command} from "./command.js";

export class OneDividedByXCommand extends Command {
    execute(prev, curr) {
        if (prev === 0) {
            return 'n/a: division by zero';
        }
        return 1 / prev;
    }

    undo(result, curr) {
        return 1 / result;
    }
}