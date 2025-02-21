import {Command} from "./command.js";

export class SquareRootCommand extends Command {
    execute(prev, curr) {
        return prev ** 0.5;
    }

    undo(result, curr) {
        return result * result;
    }
}