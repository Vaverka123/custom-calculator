import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class MemoryRecallCommand extends Command {
  execute() {
    CalculatorReceiver.recallMemory();
  }
}
