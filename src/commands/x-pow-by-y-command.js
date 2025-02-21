import {Command} from "./command.js";

export class XPowByYCommand extends Command {
    execute(prev, curr) {
        return prev ** curr;
    }

    undo(result, curr) {
        return result ** (1 / curr);
    }
}