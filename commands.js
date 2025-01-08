class Command {
  constructor(leftOperand, rightOperand) {
    this.leftOperand = leftOperand;
    this.rightOperand = rightOperand;
    this.originalState = { leftOperand, rightOperand };
  }

  execute() {
    throw new Error("execute() must be implemented");
  }

  undo() {
    this.leftOperand = this.originalState.leftOperand;
    this.rightOperand = this.originalState.rightOperand;
    return this.leftOperand;
  }
}

class AddCommand extends Command {
  execute() {
    return this.leftOperand + this.rightOperand;
  }

  undo() {
    return this.leftOperand - this.rightOperand;
  }
}

class SubtractCommand extends Command {
  execute() {
    return this.leftOperand - this.rightOperand;
  }

  undo() {
    return this.leftOperand + this.rightOperand;
  }
}

class MultiplyCommand extends Command {
  execute() {
    return this.leftOperand * this.rightOperand;
  }

  undo() {
    return this.leftOperand / this.rightOperand;
  }
}

class DivideCommand extends Command {
  execute() {
    if (this.rightOperand === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return this.leftOperand / this.rightOperand;
  }

  undo() {
    if (this.rightOperand === 0) {
      throw new Error("Cannot undo division by zero");
    }
    return this.leftOperand * this.rightOperand;
  }
}

class PercentCommand extends Command {
  execute() {
    return this.leftOperand / 100;
  }

  undo() {
    return this.leftOperand * 100;
  }
}

export {
  Command,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  PercentCommand,
};
