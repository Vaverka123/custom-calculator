import { CalculatorReceiver } from '../core/calculator-receiver.js';
import { Command } from './command.js';

export class NegateCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    CalculatorReceiver.negate(String(this.value));
  }
}
