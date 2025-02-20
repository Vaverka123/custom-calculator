// import { INITIAL_VALUE } from '../constants/constants';
// import { getFactorial } from '../utils/get-factorial';
// import { getReciprocal } from '../utils/get-reciprocal';
// import { getSqrt } from '../utils/get-sqrt';

export class CalculatorReceiver {
    static currentOperand = "";
    static previousOperand = "";
    static operation = undefined;
    static resultLocked = false;
    static undoStack = [];
    static memory = 0;

    static getValue() {
        return Number(this.value);
    }

    static setValue(newValue) {
        if (this.shouldValueUpdate || this.isAfterEqual) {
            if (this.isAfterEqual) {
                this.storedValue = null;
                this.currentOperation = null;
                this.isAfterEqual = false;
            }
            this.value = newValue;
            this.shouldValueUpdate = false;
        } else {
            this.value = this.value + newValue;
        }
    }

    static negate() {
        if (this.value.startsWith('-')) {
            this.value = this.value.slice(1);
        } else {
            this.value = '-' + this.value;
        }
        this.storedValue = Number(this.value);
    }

    static clear() {
        this.value = INITIAL_VALUE;
        this.storedValue = null;
        this.currentOperation = null;
        this.shouldValueUpdate = false;
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
                Number(this.value)
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
