import {Command} from "./command.js";

export class YRootFromXCommand extends Command {
    execute(prev, curr) {
        return prev ** (1 / curr);
    }

    undo(result, curr) {
        return result ** curr;
    }
}