import { Calculator } from '../calculator.js';
import { CalculatorReceiver } from './calculator-receiver.js';

export class CalculatorInvoker {
  commands = {};

  setCommands(label, comand) {
    //123
    this.commands[label] = comand;
  }

  executeCommand(label) {
    const command = this.commands[label];

    command.execute();
    Calculator.updateDisplay(CalculatorReceiver.getValue());
  }
}
