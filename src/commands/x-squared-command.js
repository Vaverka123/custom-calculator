import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class XSquaredCommand extends Command {
  execute() {
    CalculatorReceiver.square();
  }
}
