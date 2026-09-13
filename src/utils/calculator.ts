export type CalculatorOperator = '+' | '-' | '*' | '/';

export function calculateResult(
  first: number,
  second: number,
  operator: CalculatorOperator
): number | null {
  // Addition
  if (operator === '+') {
    return first + second;
  }

  // Subtraction
  if (operator === '-') {
    return first - second;
  }

  // Multiplication
  if (operator === '*') {
    return first * second;
  }

  // Division
  if (operator === '/') {
    // Prevent division by zero
    if (second === 0) {
      return null;
    }

    return first / second;
  }

  return null;
}