export class Calculator {
    constructor() {
        this.value = 0;

    }
    del() {
        this.value = this.currentOperand.toString().slice(0, -1)
    }
    add(valueToAdd) {
        this.value = this.value + valueToAdd;
    }
    subtract(valueToSubtract) {
        this.value = this.value - valueToSubtract;
    }

    multiply(valueToMultiply) {
        this.value = this.value * valueToMultiply;
    }

    divide(valueToDivide) {
        this.value = this.value / valueToDivide;
    }
    reset() {
        this.value = 0;
    }
    
}
