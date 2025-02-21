import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class FactorialCommand extends Command {
  execute() {
    CalculatorReceiver.factorial();
  }

  undo(result, curr) {
    return curr;
  }
}
