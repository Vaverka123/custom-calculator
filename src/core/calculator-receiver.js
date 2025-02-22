import { INITIAL_VALUE } from '../constants.js';
import { getFactorial } from '../utils/get-factorial.js';

export class CalculatorReceiver {
  static currentOperand = INITIAL_VALUE;
  static previousOperand = INITIAL_VALUE;
  static operation = undefined;
  static resultLocked = false;
  static undoStack = [];
  static memory = 0;

  static getValue() {
    return Number(this.currentOperand);
  }

  static setValue(newValue) {
    if (this.resultLocked) {
      this.clearInput();
      this.resultLocked = false;
    }

    if (this.currentOperand === '' && newValue === '00') return;
    if (this.currentOperand === '0' && newValue === '00') return;
    if (this.currentOperand === '0' && newValue === '0') return;
    if (this.currentOperand.includes('.') && newValue === '.') return;

    if (this.currentOperand === '' && newValue === '0') {
      this.currentOperand = '0';
      return this.currentOperand;
    }

    if (this.currentOperand === '0' && newValue === '.') {
      this.currentOperand = '0.';
      return this.currentOperand;
    }

    if (
      (this.currentOperand === '0' && newValue !== '0') ||
      (this.currentOperand === '0' && newValue !== '00')
    ) {
      this.currentOperand = newValue.toString();
      return this.currentOperand;
    }

    if (this.currentOperand === '' && newValue === '.') {
      this.currentOperand = '0.';
      return this.currentOperand;
    }

    if (this.currentOperand.length < 20) {
      this.currentOperand = this.currentOperand + newValue.toString();
      return this.currentOperand;
    }

    return this.currentOperand;
  }

  static negate() {
    if (this.currentOperand === '') return;
    this.previousOperand = this.currentOperand.toString();
    this.currentOperand = (parseFloat(this.currentOperand) * -1).toString();
  }

  static clearInput() {
    this.currentOperand = INITIAL_VALUE;
    this.previousOperand = INITIAL_VALUE;
    this.operation = undefined;
  }

  static oneDividedByX() {
    if (this.currentOperand === 0) {
      return 'n/a: division by zero';
    }
    this.currentOperand = 1 / this.currentOperand;
    return this.currentOperand;
  }

  static square() {
    this.previousOperand = Number(this.currentOperand);
    return (this.currentOperand = String(Number(this.currentOperand) ** 2));
  }

  static cube() {
    this.previousOperand = Number(this.currentOperand);
    return (this.currentOperand = String(Number(this.currentOperand) ** 3));
  }

  static powerOfTen() {
    this.value = String(10 ** Number(this.value));
    this.storedValue = Number(this.value);
  }

  static sqrt() {
    this.currentOperand = this.currentOperand ** 0.5;
    return this.currentOperand;
  }

  static cubeRoot() {
    this.value = String(Number(this.value) ** (1 / 3));
    this.storedValue = Number(this.value);
  }

  static reciprocal() {
    this.value = String(getReciprocal(Number(this.value)));
    this.storedValue = Number(this.value);
  }

  static factorial() {
    this.currentOperand = String(getFactorial(Number(this.currentOperand)));
    this.previousOperand = Number(this.currentOperand);
  }

  static percentage() {
    // if (this.storedValue !== null && this.currentOperation !== null) {
    //   this.value = String((this.storedValue * Number(this.value)) / 100);
    // } else {
    //   this.value = String(Number(this.value) / 100);
    // }
    // this.storedValue = Number(this.value);
    this.currentOperand = this.currentOperand * 0.01;
    return this.currentOperand;
  }

  static performBinaryOperation(operation) {
    this.isAfterEqual = false;

    if (this.storedValue === null) {
      this.storedValue = Number(this.value);
    } else {
      this.equals();
    }

    this.currentOperation = operation;
    this.shouldValueUpdate = true;
  }

  static equals() {
    if (this.storedValue !== null && this.currentOperation !== null) {
      const result = this.currentOperation(
        this.storedValue,
        Number(this.value),
      );
      this.value = String(result);
      this.storedValue = result;
      this.currentOperation = null;
      this.shouldValueUpdate = false;
      this.isAfterEqual = true;
    }
  }

  static clearMemory() {
    this.memory = 0;
  }

  static addToMemory() {
    this.memory += Number(this.value);
  }

  static subtractFromMemory() {
    this.memory -= Number(this.value);
  }

  static recallMemory() {
    this.value = String(this.memory);
  }
}
