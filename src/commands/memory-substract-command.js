import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class MemorySubstractCommand extends Command {
  execute() {
    CalculatorReceiver.subtractFromMemory();
  }
}
