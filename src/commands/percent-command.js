import {Command} from "./command.js";

export class PercentCommand extends Command {
    execute(prev, curr) {
        return prev * 0.01;
    }

    undo(result, curr) {
        return result * 100;
    }
}