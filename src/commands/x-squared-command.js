import {Command} from "./command.js";

export class XSquaredCommand extends Command {
    execute(prev, curr) {
        return prev * prev;
    }

    undo(result, curr) {
        return Math.round(result ** 0.5);
    }
}