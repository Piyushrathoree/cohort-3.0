/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    constructor() {
        // Initialize the result variable to 0
        this.result = 0;
    }

    add(value) {
        this.result += value;
    }

    subtract(value) {
        this.result -= value;
    }

    multiply(value) {
        this.result *= value;
    }

    divide(value) {
        if (value !== 0) {
            this.result /= value;
        } else {
            throw new Error("Cannot divide by 0");
        }
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    calculate(expression) {
        // Check for invalid input: empty or containing unsupported characters
        if (!expression || /[a-zA-Z]/.test(expression)) {
            throw new Error("Invalid expression");
        }

        // Remove any continuous spaces and extra spaces from the expression
        expression = expression.replace(/\s+/g, "");

        if (/\/\s*0/.test(expression)) {
            throw new Error("Division by zero detected in expression");
        }
        try {
            // Evaluate the expression safely
            this.result = eval(expression);
        } catch (error) {
            throw new Error("Error evaluating expression");
        }
    }
}

module.exports = Calculator;
