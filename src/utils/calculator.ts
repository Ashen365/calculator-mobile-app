export type CalculatorOperator = '+' | '-' | '*' | '/';

export function calculateResult(
  first: number,
  second: number,
  operator: CalculatorOperator
): number | null {
  switch (operator) {
    case '+':
      return first + second;

    case '-':
      return first - second;

    case '*':
      return first * second;

    case '/':
      if (second === 0) {
        return null;
      }

      return first / second;

    default:
      return null;
  }
}