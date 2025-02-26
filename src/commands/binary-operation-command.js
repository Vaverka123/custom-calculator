import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class BinaryOperationCommand extends Command {
  constructor(operation) {
    super();
    this.operation = operation;
  }

  execute() {
    CalculatorReceiver.performBinaryOperation(this.operation);
  }
}
