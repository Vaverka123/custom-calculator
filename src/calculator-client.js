import {
    AddCommand,
    DivideCommand,
    MultiplyCommand,
    OneDividedByXCommand, SquareRootCommand,
    SubtractCommand,
    TenPowByXCommand, XCubedCommand, XPowByYCommand, XSquaredCommand, YRootFromXCommand
} from "./commands.js";

export class CalculatorClient {
    constructor(invoker) {
        this.invoker = invoker;
    }

    setupCommands() {
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