import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class YRootFromXCommand extends Command {
  execute() {
    CalculatorReceiver.performBinaryOperation('y-root-from-x');
  }
}
