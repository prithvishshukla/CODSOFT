
/**
 * Calculator state and operations management
 * @module calculator
 * 
 * @property {number} total - Stores the running total of calculations
 * @property {number} currentNum - Stores the current input number
 * @property {boolean} equalsChain - Tracks if calculations are being chained with equals
 * 
 * @property {Object} operations - Tracks which operation is currently active
 * @property {boolean} operations.addition - Addition operation state
 * @property {boolean} operations.subtraction - Subtraction operation state 
 * @property {boolean} operations.multiplication - Multiplication operation state
 * @property {boolean} operations.division - Division operation state
 * 
 * @property {Object} calculate - Contains calculation functions
 * @property {function} calculate.addition - Adds two numbers
 * @property {function} calculate.subtraction - Subtracts two numbers
 * @property {function} calculate.multiplication - Multiplies two numbers
 * @property {function} calculate.division - Divides two numbers
 * 
 * @property {boolean} first - Tracks if this is the first number being entered
 * @property {boolean} pending - Tracks if there is a pending operation
 */
// THIS STORES INPUTTED NUMBERS TO MAKE CALCULATIONS

window.total = 0;
window.currentNum = 0;
window.equalsChain = false;

window.operations = {
  addition: false,
  subtraction: false,
  multiplication: false,
  division: false
};

window.calculate = {
  addition: function (a, b) { return a + b; },
  subtraction: function (a, b) { return a - b; },
  multiplication: function (a, b) { return a * b; },
  division: function (a, b) { return a / b; }
};

window.first = true;
window.pending = false;