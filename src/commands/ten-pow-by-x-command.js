import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class TenPowByXCommand extends Command {
  execute() {
    CalculatorReceiver.powerOfTen();
  }
}
