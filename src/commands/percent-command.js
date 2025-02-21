import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class PercentCommand extends Command {
  execute() {
    CalculatorReceiver.percentage();
  }
}
