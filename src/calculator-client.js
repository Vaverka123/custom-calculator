import { SetValueCommand } from './commands/set-value-command.js';
import { SquareRootCommand } from './commands/square-root-command.js';
import { OneDividedByXCommand } from './commands/one-diveded-by-x-command.js';
import { TenPowByXCommand } from './commands/ten-pow-by-x-command.js';
import { XPowByYCommand } from './commands/x-pow-by-y-command.js';
import { YRootFromXCommand } from './commands/x-root-from-y-command.js';
import { XSquaredCommand } from './commands/x-squared-command.js';
import { XCubedCommand } from './commands/x-cubed-command.js';
import { DivideCommand } from './commands/divide-command.js';
import { AddCommand } from './commands/add-command.js';
import { SubtractCommand } from './commands/substract-command.js';
import { MultiplyCommand } from './commands/multiply-command.js';
import { ClearInputCommand } from './commands/clear-input-command.js';
import { FactorialCommand } from './commands/factorial-command.js';
import { NegateCommand } from './commands/negate-command.js';

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

    this.invoker.setCommands('+', new AddCommand());
    this.invoker.setCommands('-', new SubtractCommand());
    this.invoker.setCommands('*', new MultiplyCommand());
    this.invoker.setCommands('/', new DivideCommand());
    this.invoker.setCommands('sign-change', new NegateCommand());
    this.invoker.setCommands('clear', new ClearInputCommand());
    this.invoker.setCommands('x-squared', new XSquaredCommand());
    this.invoker.setCommands('x-cubed', new XCubedCommand());
    this.invoker.setCommands('ten-powered-by-x', new TenPowByXCommand());
    this.invoker.setCommands('square-root-from-xt', new SquareRootCommand());
    this.invoker.setCommands('one-divided-by-x', new OneDividedByXCommand());
    this.invoker.setCommands('ten-powered-by-x', new TenPowByXCommand());
    this.invoker.setCommands('xPowByY', new XPowByYCommand());
    this.invoker.setCommands('yRootFromX', new YRootFromXCommand());
    this.invoker.setCommands('factorial', new FactorialCommand());
  }

  executeCommand(label) {
    this.invoker.executeCommand(label);
  }
}
