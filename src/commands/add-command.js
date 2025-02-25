import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class AddCommand extends Command {
  execute() {
    CalculatorReceiver.performBinaryOperation('+');
  }
}
