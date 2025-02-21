import {Command} from "./command.js";

export class CubeRootCommand extends Command {
    execute(prev, curr) {
        return prev ** (1 / 3);
    }

    undo(result, curr) {
        return Math.round(result * result * result);
    }
}