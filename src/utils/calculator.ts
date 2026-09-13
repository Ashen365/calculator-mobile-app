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

export function calculatePercentage(
  first: number,
  percentage: number,
  operator: CalculatorOperator
): number {
  const percentageValue = (first * percentage) / 100;

  switch (operator) {
    case '+':
      return first + percentageValue;

    case '-':
      return first - percentageValue;

    case '*':
      return first * (percentage / 100);

    case '/':
      if (percentage === 0) {
        return 0;
      }

      return first / (percentage / 100);

    default:
      return first;
  }
}