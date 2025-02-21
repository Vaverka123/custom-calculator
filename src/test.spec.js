import {AddCommand} from "./commands/add-command.js";
import {SubtractCommand} from "./commands/substract-command.js";
import {MultiplyCommand} from "./commands/multiply-command.js";
import {DivideCommand} from "./commands/divide-command.js";
import {XSquaredCommand} from "./commands/x-squared-command.js";
import {XCubedCommand} from "./commands/x-cubed-command.js";
import {PercentCommand} from "./commands/percent-command.js";
import {SquareRootCommand} from "./commands/square-root-command.js";
import {CubeRootCommand} from "./commands/cube-root-command.js";
import {FactorialCommand} from "./commands/factorial-command.js";
import {OneDividedByXCommand} from "./commands/one-diveded-by-x-command.js";
import {TenPowByXCommand} from "./commands/ten-pow-by-x-command.js";
import {XPowByYCommand} from "./commands/x-pow-by-y-command.js";
import {YRootFromXCommand} from "./commands/x-root-from-y-command.js";


describe('Command Design Pattern - Math Commands', () => {
  test('AddCommand - execute and undo', () => {
    const add = new AddCommand();
    expect(add.execute(5, 3)).toBe(8);
    expect(add.undo(8, 3)).toBe(5);
  });

  test('SubtractCommand - execute and undo', () => {
    const subtract = new SubtractCommand();
    expect(subtract.execute(5, 3)).toBe(2);
    expect(subtract.undo(2, 3)).toBe(5);
  });

  test('MultiplyCommand - execute and undo', () => {
    const multiply = new MultiplyCommand();
    expect(multiply.execute(5, 3)).toBe(15);
    expect(multiply.undo(15, 3)).toBe(5);
  });

  test('DivideCommand - execute and undo', () => {
    const divide = new DivideCommand();
    expect(divide.execute(6, 3)).toBe(2);
    expect(divide.undo(2, 3)).toBe(6);
    expect(divide.execute(6, 0)).toBe('n/a: division by zero');
  });

  test('XSquaredCommand - execute and undo', () => {
    const squared = new XSquaredCommand();
    expect(squared.execute(4)).toBe(16);
    expect(squared.undo(16)).toBe(4);
  });

  test('XCubedCommand - execute and undo', () => {
    const cubed = new XCubedCommand();
    expect(cubed.execute(2)).toBe(8);
    expect(cubed.undo(8)).toBeCloseTo(2, 5);
  });

  test('PercentCommand - execute and undo', () => {
    const percent = new PercentCommand();
    expect(percent.execute(50)).toBe(0.5);
    expect(percent.undo(0.5)).toBe(50);
  });

  test('SquareRootCommand - execute and undo', () => {
    const sqrt = new SquareRootCommand();
    expect(sqrt.execute(9)).toBe(3);
    expect(sqrt.undo(3)).toBe(9);
  });

  test('CubeRootCommand - execute and undo', () => {
    const cbrt = new CubeRootCommand();
    expect(cbrt.execute(27)).toBeCloseTo(3, 1);
    expect(cbrt.undo(3)).toBe(27);
  });

  describe('FactorialCommand - execute and undo', () => {
    test('FactorialCommand - valid factorial calculations', () => {
      const factorial = new FactorialCommand();
      expect(factorial.execute(0)).toBe(1);
      expect(factorial.execute(1)).toBe(1);
      expect(factorial.execute(5)).toBe(120);
      expect(factorial.execute(10)).toBe(3628800);
    });

    test('FactorialCommand - invalid factorial inputs', () => {
      const factorial = new FactorialCommand();
      expect(factorial.execute(-1)).toBe('n/a: factorial of negative number');
    });

    test('FactorialCommand - undo', () => {
      const factorial = new FactorialCommand();
      expect(factorial.undo(120, 5)).toBe(5);
    });
  });

  test('OneDividedByXCommand - execute and undo', () => {
    const oneOverX = new OneDividedByXCommand();
    expect(oneOverX.execute(4)).toBe(0.25);
    expect(oneOverX.execute(0)).toBe('n/a: division by zero');
    expect(oneOverX.undo(0.25)).toBe(4);
  });

  test('TenPoweredByXCommand - execute and undo', () => {
    const tenPowByX = new TenPowByXCommand();
    expect(tenPowByX.execute(2)).toBe(100);
    expect(tenPowByX.execute(4)).toBe(10000);
    expect(tenPowByX.undo(100)).toBe(2);
  });

  test('XPowByYCommand - execute and undo', () => {
    const pow = new XPowByYCommand();
    expect(pow.execute(2, 3)).toBe(8);
    expect(pow.undo(8, 3)).toBe(2);
  });

  test('YRootFromXCommand - execute and undo', () => {
    const root = new YRootFromXCommand();
    expect(root.execute(27, 3)).toBe(3);
    expect(root.undo(3, 3)).toBe(27);
  });
});
