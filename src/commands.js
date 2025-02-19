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
      this.originalPrev = prev;
      return "n/a: division by zero";
    }
    return prev / curr;
  }

  undo(result, curr) {
    if (result === "n/a: division by zero") {
      return this.originalPrev;
    }
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
    return prev ** (1 / 3);
  }

  undo(result, curr) {
    return result * result * result;
  }
}

class FactorialCommand extends Command {
  execute(curr) {
    curr;
    if (curr < 0) return "n/a: factorial of negative number";
    if (curr === 0 || curr === 1) return 1;

    let result = 1;
    for (let i = 2; i <= curr; i++) {
      result *= i;
    }
    return result;
  }

  undo(result, curr) {
    return curr;
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
    return 1 / result;
  }
}

class TenPowByXCommand extends Command {
  execute(curr) {
    if (curr === 0) {
      return 1;
    }
    if (curr === 1) {
      curr;
      return 10;
    }

    return Math.pow(10, curr);
  }

  undo(result) {
    return Math.log10(result);
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
  FactorialCommand,
  OneDividedByXCommand,
  XPowByYCommand,
  YRootFromXCommand,
  TenPowByXCommand,
};
