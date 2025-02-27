import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class XPowYCommand extends Command {
  execute() {
    CalculatorReceiver.performBinaryOperation('x-pow-y');
  }
}
