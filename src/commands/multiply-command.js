import {Command} from "./command.js";

export class MultiplyCommand extends Command {
    execute(prev, curr) {
        return prev * curr;
    }

    undo(result, curr) {
        return result / curr;
    }
}