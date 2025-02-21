import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class OneDividedByXCommand extends Command {
  execute() {
    CalculatorReceiver.oneDividedByX();
  }
}
