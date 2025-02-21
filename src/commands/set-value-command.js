import { CalculatorReceiver } from '../core/calculator-receiver.js';
import { Command } from './command.js';

export class SetValueCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    CalculatorReceiver.setValue(String(this.value));
  }
}
