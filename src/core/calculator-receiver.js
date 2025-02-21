import { INITIAL_VALUE } from '../constants.js';

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
    if (this.value.startsWith('-')) {
      this.value = this.value.slice(1);
    } else {
      this.value = '-' + this.value;
    }
    this.storedValue = Number(this.value);
  }

  static clearInput() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  static square() {
    this.value = String(Number(this.value) ** 2);
    this.storedValue = Number(this.value);
  }

  static cube() {
    this.value = String(Number(this.value) ** 3);
    this.storedValue = Number(this.value);
  }

  static powerOfTen() {
    this.value = String(10 ** Number(this.value));
    this.storedValue = Number(this.value);
  }

  static sqrt() {
    this.value = String(getSqrt(Number(this.value)));
    this.storedValue = Number(this.value);
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
    this.value = String(getFactorial(Number(this.value)));
    this.storedValue = Number(this.value);
  }

  static percentage() {
    if (this.storedValue !== null && this.currentOperation !== null) {
      this.value = String((this.storedValue * Number(this.value)) / 100);
    } else {
      this.value = String(Number(this.value) / 100);
    }
    this.storedValue = Number(this.value);
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
