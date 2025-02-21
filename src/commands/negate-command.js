import { CalculatorReceiver } from '../core/calculator-receiver.js';
import { Command } from './command.js';

export class NegateCommand extends Command {
  execute() {
    CalculatorReceiver.negate();
  }
}
