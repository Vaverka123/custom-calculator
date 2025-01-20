import {
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
} from "./commands";

describe("Command Design Pattern - Math Commands", () => {
  test("AddCommand - execute and undo", () => {
    const add = new AddCommand();
    expect(add.execute(5, 3)).toBe(8);
    expect(add.undo(8, 3)).toBe(5);
  });

  test("SubtractCommand - execute and undo", () => {
    const subtract = new SubtractCommand();
    expect(subtract.execute(5, 3)).toBe(2);
    expect(subtract.undo(2, 3)).toBe(5);
  });

  test("MultiplyCommand - execute and undo", () => {
    const multiply = new MultiplyCommand();
    expect(multiply.execute(5, 3)).toBe(15);
    expect(multiply.undo(15, 3)).toBe(5);
  });

  test("DivideCommand - execute and undo", () => {
    const divide = new DivideCommand();
    expect(divide.execute(6, 3)).toBe(2);
    expect(divide.undo(2, 3)).toBe(6);
    expect(divide.execute(6, 0)).toBe("n/a: division by zero");
  });

  test("XSquaredCommand - execute and undo", () => {
    const squared = new XSquaredCommand();
    expect(squared.execute(4)).toBe(16);
    expect(squared.undo(16)).toBe(4);
  });

  test("XCubedCommand - execute and undo", () => {
    const cubed = new XCubedCommand();
    expect(cubed.execute(2)).toBe(8);
    expect(cubed.undo(8)).toBeCloseTo(2, 5);
  });

  test("PercentCommand - execute and undo", () => {
    const percent = new PercentCommand();
    expect(percent.execute(50)).toBe(0.5);
    expect(percent.undo(0.5)).toBe(50);
  });

  test("SquareRootCommand - execute and undo", () => {
    const sqrt = new SquareRootCommand();
    expect(sqrt.execute(9)).toBe(3);
    expect(sqrt.undo(3)).toBe(9);
  });

  test("CubeRootCommand - execute and undo", () => {
    const cbrt = new CubeRootCommand();
    expect(cbrt.execute(27)).toBeCloseTo(3, 1);
    expect(cbrt.undo(3)).toBe(27);
  });

  describe("FactorialCommand - execute and undo", () => {
    test("FactorialCommand - valid factorial calculations", () => {
      const factorial = new FactorialCommand();
      expect(factorial.execute(0)).toBe(1); // 0! = 1
      expect(factorial.execute(1)).toBe(1); // 1! = 1
      expect(factorial.execute(5)).toBe(120); // 5! = 120
      expect(factorial.execute(10)).toBe(3628800); // 10! = 3628800
    });

    test("FactorialCommand - invalid factorial inputs", () => {
      const factorial = new FactorialCommand();
      expect(factorial.execute(-1)).toBe("n/a: factorial of negative number"); // Negative input
    });

    test("FactorialCommand - undo", () => {
      const factorial = new FactorialCommand();
      expect(factorial.undo(120, null)).toBe("n/a: cannot undo factorial");
    });
  });

  test("OneDividedByXCommand - execute and undo", () => {
    const oneOverX = new OneDividedByXCommand();
    expect(oneOverX.execute(4)).toBe(0.25);
    expect(oneOverX.execute(0)).toBe("n/a: division by zero");
    expect(oneOverX.undo(0.25)).toBe("n/a: cannot undo 1/x");
  });

  test("XPowByYCommand - execute and undo", () => {
    const pow = new XPowByYCommand();
    expect(pow.execute(2, 3)).toBe(8);
    expect(pow.undo(8, 3)).toBe(2);
  });

  test("YRootFromXCommand - execute and undo", () => {
    const root = new YRootFromXCommand();
    expect(root.execute(27, 3)).toBe(3);
    expect(root.undo(3, 3)).toBe(27);
  });
});
