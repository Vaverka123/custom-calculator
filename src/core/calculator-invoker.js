import { Calculator } from '../calculator.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class CalculatorInvoker {
  commands = {};

  setCommands(label, comand) {
    this.commands[label] = comand;
  }

  executeCommand(label) {
    const command = this.commands[label];
    // debugger;
    command.execute();
    Calculator.updateDisplay(CalculatorReceiver.getValue());
  }
}
