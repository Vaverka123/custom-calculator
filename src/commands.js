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
      return "n/a: division by zero";
    }
    return prev / curr;
  }

  undo(result, curr) {
    return result * curr;
  }
}

class XSquaredCommand extends Command {
  execute(prev, curr) {
    return prev * prev;
  }

  undo(result, curr) {
    return result ** 0.5;
  }
}

class XCubedCommand extends Command {
  execute(prev, curr) {
    return prev * prev * prev;
  }

  undo(result, curr) {
    return result ** (1 / 3);
  }
}

class PercentCommand extends Command {
  execute(prev, curr) {
    return prev * 0.01;
  }

  undo(result, curr) {
    return result * 100;
  }
}

class SquareRootCommand extends Command {
  execute(prev, curr) {
    return prev ** 0.5;
  }

  undo(result, curr) {
    return result * result;
  }
}

class CubeRootCommand extends Command {
  execute(prev, curr) {
    return prev ** 0.33;
  }

  undo(result, curr) {
    return result * result * result;
  }
}

class AbsoluteValueCommand extends Command {
  execute(prev, curr) {
    return prev < 0 ? -prev : prev;
  }

  undo(result, curr) {
    return "n/a for absolute value";
  }
}

class OneDividedByXCommand extends Command {
  execute(prev, curr) {
    if (prev === 0) {
      return "n/a: division by zero";
    }
    return 1 / prev;
  }

  undo(result, curr) {
    return "n/a: cannot undo 1/x";
  }
}

class XPowByYCommand extends Command {
  execute(prev, curr) {
    return prev ** curr;
  }

  undo(result, curr) {
    return result ** (1 / curr);
  }
}

class YRootFromXCommand extends Command {
  execute(prev, curr) {
    return prev ** (1 / curr);
  }

  undo(result, curr) {
    return result ** curr;
  }
}

export {
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  XSquaredCommand,
  XCubedCommand,
  PercentCommand,
  SquareRootCommand,
  CubeRootCommand,
  AbsoluteValueCommand,
  OneDividedByXCommand,
  XPowByYCommand,
  YRootFromXCommand,
};
