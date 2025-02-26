import { getFactorial } from '../utils/get-factorial.js';

export class CalculatorReceiver {
  static currentOperand = '';
  static previousOperand = '';
  static currentOperation = undefined;
  //static resultLocked = false;
  static memory = 0;
  static lastOperatorWasBinary = false;
  // let undoStack = [];
  static isAfterEqual = false;

  static getValue() {
    return Number(this.currentOperand);
  }

  static setValue(newValue) {
    if (this.lastOperatorWasBinary && !isNaN(newValue)) {
      this.lastOperatorWasBinary = false;
      this.clearInput();
    }

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
    this.currentOperand = (parseFloat(this.currentOperand) * -1).toString();
    this.previousOperand = Number(this.currentOperand);
  }

  static clearInput() {
    this.currentOperand = '';
  }

  static allClear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.currentOperation = null;
  }

  static oneDividedByX() {
    if (this.currentOperand === 0) {
      return 'n/a: division by zero';
    }
    this.currentOperand = 1 / this.currentOperand;
    this.previousOperand = Number(this.currentOperand);
  }

  static square() {
    this.currentOperand = String(Number(this.currentOperand) ** 2);
    this.previousOperand = Number(this.currentOperand);
  }

  static cube() {
    this.currentOperand = String(Number(this.currentOperand) ** 3);
    this.previousOperand = Number(this.currentOperand);
  }

  static powerOfTen() {
    if (this.currentOperand === 0) {
      return 1;
    }
    if (this.currentOperand === 1) {
      return 10;
    }
    this.currentOperand = Math.pow(10, this.currentOperand);
    this.previousOperand = Number(this.currentOperand);
  }

  static sqrt() {
    this.currentOperand = this.currentOperand ** 0.5;
    this.previousOperand = Number(this.currentOperand);
  }

  static cubeRoot() {
    this.currentOperand = String(Number(this.currentOperand) ** (1 / 3));
    this.previousOperand = Number(this.currentOperand);
  }

  static factorial() {
    this.currentOperand = String(getFactorial(Number(this.currentOperand)));
    this.previousOperand = Number(this.currentOperand);
  }

  static percentage() {
    this.currentOperand = this.currentOperand * 0.01;
    this.previousOperand = Number(this.currentOperand);
  }

  static clearMemory() {
    this.memory = 0;
  }

  static addToMemory() {
    this.memory += Number(this.currentOperand);
  }

  static subtractFromMemory() {
    this.memory -= Number(this.currentOperand);
  }

  static recallMemory() {
    this.currentOperand = String(this.memory);
  }

  static performBinaryOperation(op) {
    this.isAfterEqual = false;
    this.lastOperatorWasBinary = true;
    if (this.previousOperand === '') {
      this.previousOperand = Number(this.currentOperand);
      //  this.currentOperand = '';
    } else {
      this.equals();
    }
    this.currentOperation = op;
  }

  static equals() {
    if (
      this.previousOperand !== '' &&
      this.currentOperation !== '' &&
      this.currentOperand !== ''
    ) {
      if (this.isAfterEqual) {
        debugger;
        this.previousOperand = this.currentOperand;
      }
      console.log('Current Operation', this.currentOperation);
      console.log('Previous Operand', this.previousOperand);
      console.log('Current Operand', this.currentOperand);
      const result = this.currentOperation(
        Number(this.previousOperand),
        Number(this.currentOperand),
      );

      if (this.isAfterEqual) {
        // this.previousOperand = result;
      } else {
        this.currentOperand = String(result);
      }

      this.isAfterEqual = true;
    }
  }
}
