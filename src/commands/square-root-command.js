import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class SquareRootCommand extends Command {
  execute() {
    CalculatorReceiver.sqrt();
  }
}
