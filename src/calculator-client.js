import {SetValueCommand} from "./commands/set-value-command.js";
import {SquareRootCommand} from "./commands/square-root-command.js";
import {OneDividedByXCommand} from "./commands/one-diveded-by-x-command.js";
import {TenPowByXCommand} from "./commands/ten-pow-by-x-command.js";
import {XPowByYCommand} from "./commands/x-pow-by-y-command.js";
import {YRootFromXCommand} from "./commands/x-root-from-y-command.js";
import {XSquaredCommand} from "./commands/x-squared-command.js";
import {XCubedCommand} from "./commands/x-cubed-command.js";
import {DivideCommand} from "./commands/divide-command.js";
import {AddCommand} from "./commands/add-command.js";
import {SubtractCommand} from "./commands/substract-command.js";
import {MultiplyCommand} from "./commands/multiply-command.js";

export class CalculatorClient {
    constructor(invoker) {
        this.invoker = invoker;
    }

    setupCommands() {
        this.invoker.setCommands('0', new SetValueCommand(0));
        this.invoker.setCommands('1', new SetValueCommand(1));
        this.invoker.setCommands('2', new SetValueCommand(2));
        this.invoker.setCommands('3', new SetValueCommand(3));
        this.invoker.setCommands('4', new SetValueCommand(4));
        this.invoker.setCommands('5', new SetValueCommand(5));
        this.invoker.setCommands('6', new SetValueCommand(6));
        this.invoker.setCommands('7', new SetValueCommand(7));
        this.invoker.setCommands('8', new SetValueCommand(8));
        this.invoker.setCommands('9', new SetValueCommand(9));
        this.invoker.setCommands('.', new SetValueCommand('.'));

        this.invoker.setCommands('add', new AddCommand());
        this.invoker.setCommands('subtract', new SubtractCommand());
        this.invoker.setCommands('multiply', new MultiplyCommand());
        this.invoker.setCommands('divide', new DivideCommand());
        // this.invoker.setCommands('sign-change', new NegateCommand()); @TODO
        // this.invoker.setCommands('clear', new ClearCommand()); @TODO
        this.invoker.setCommands('square', new XSquaredCommand());
        this.invoker.setCommands('cube', new XCubedCommand());
        // this.invoker.setCommands('powerOfTen', new TenPowByXCommand()); @TODO fix
        this.invoker.setCommands('sqrt', new SquareRootCommand());
        this.invoker.setCommands('oneDividedByX', new OneDividedByXCommand());
        this.invoker.setCommands('tenPowByX', new TenPowByXCommand());
        this.invoker.setCommands('xPowByY', new XPowByYCommand());
        this.invoker.setCommands('yRootFromX', new YRootFromXCommand());
    }

    executeCommand(label) {
        this.invoker.executeCommand(label);
    }
}