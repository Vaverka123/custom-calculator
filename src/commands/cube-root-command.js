import { Command } from './command.js';
import { CalculatorReceiver } from '../core/calculator-receiver.js';

export class CubeRootCommand extends Command {
  execute() {
    CalculatorReceiver.cubeRoot();
  }
}
