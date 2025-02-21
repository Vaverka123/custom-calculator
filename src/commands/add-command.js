import {Command} from "./command.js";

export class AddCommand extends Command {
    execute(prev, curr) {
        return prev + curr;
    }

    undo(result, curr) {
        return result - curr;
    }
}