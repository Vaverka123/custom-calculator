import {Command} from "./command.js";

export class TenPowByXCommand extends Command {
    execute(curr) {
        if (curr === 0) {
            return 1;
        }
        if (curr === 1) {
            curr;
            return 10;
        }

        return Math.pow(10, curr);
    }

    undo(result) {
        return Math.log10(result);
    }
}