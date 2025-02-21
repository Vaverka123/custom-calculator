import {Command} from "./command.js";

export class XCubedCommand extends Command {
    execute(prev, curr) {
        return prev * prev * prev;
    }

    undo(result, curr) {
        return Math.round(result ** (1 / 3));
    }
}