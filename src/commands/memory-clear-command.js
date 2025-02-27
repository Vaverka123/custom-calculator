import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class MemoryClearCommand extends Command {
  execute() {
    CalculatorReceiver.clearMemory();
  }
}
