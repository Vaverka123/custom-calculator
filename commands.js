class Command {
  execute(prev, curr) {
    throw new Error("execute() must be implemented");
  }

  undo(result, curr) {
    throw new Error("undo() must be implemented");
  }
}
class AddCommand extends Command {
  execute(prev, curr) {
    return prev + curr;
  }

  undo(result, curr) {
    return result - curr;
  }
}

class SubtractCommand extends Command {
  execute(prev, curr) {
    return prev - curr;
  }

  undo(result, curr) {
    return result + curr;
  }
}

class MultiplyCommand extends Command {
  execute(prev, curr) {
    return prev * curr;
  }

  undo(result, curr) {
    return result / curr;
  }
}

class DivideCommand extends Command {
  execute(prev, curr) {
    if (curr === 0) {
      return "undefined";
    }
    return prev / curr;
  }

  undo(result, curr) {
    return result * curr;
  }
}

export { AddCommand, SubtractCommand, MultiplyCommand, DivideCommand };
