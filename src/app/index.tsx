import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CalculatorButton } from '../components/calculator-button';
import {
  calculatePercentage,
  calculateResult,
  type CalculatorOperator,
} from '../utils/calculator';

export default function HomeScreen() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operator, setOperator] =
    useState<CalculatorOperator | null>(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const [lastOperator, setLastOperator] =
    useState<CalculatorOperator | null>(null);
  const [lastNumber, setLastNumber] = useState<number | null>(null);

  const handleNumberPress = (number: string) => {
    if (display === 'Error') {
      setDisplay(number);
      setShouldResetDisplay(false);
      return;
    }

    if (shouldResetDisplay) {
      setDisplay(number);
      setShouldResetDisplay(false);
      return;
    }

    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleDecimalPress = () => {
    if (display === 'Error') {
      setDisplay('0.');
      setShouldResetDisplay(false);
      return;
    }

    if (shouldResetDisplay) {
      setDisplay('0.');
      setShouldResetDisplay(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperatorPress = (
    selectedOperator: CalculatorOperator
  ) => {
    const currentNumber = Number(display);

    if (
      firstNumber !== null &&
      operator !== null &&
      !shouldResetDisplay
    ) {
      const result = calculateResult(
        firstNumber,
        currentNumber,
        operator
      );

      if (result === null) {
        setDisplay('Error');
        setFirstNumber(null);
        setOperator(null);
        setLastOperator(null);
        setLastNumber(null);
        setShouldResetDisplay(true);
        return;
      }

      setDisplay(String(result));
      setFirstNumber(result);
    } else {
      setFirstNumber(currentNumber);
    }

    setOperator(selectedOperator);
    setShouldResetDisplay(true);

    setLastOperator(null);
    setLastNumber(null);
  };

  const handleEqualPress = () => {
    if (firstNumber !== null && operator !== null) {
      const secondNumber = Number(display);

      const result = calculateResult(
        firstNumber,
        secondNumber,
        operator
      );

      if (result === null) {
        setDisplay('Error');
        setFirstNumber(null);
        setOperator(null);
        setLastOperator(null);
        setLastNumber(null);
        setShouldResetDisplay(true);
        return;
      }

      setDisplay(String(result));

      setLastOperator(operator);
      setLastNumber(secondNumber);

      setFirstNumber(null);
      setOperator(null);
      setShouldResetDisplay(true);

      return;
    }

    if (lastOperator !== null && lastNumber !== null) {
      const currentNumber = Number(display);

      const result = calculateResult(
        currentNumber,
        lastNumber,
        lastOperator
      );

      if (result === null) {
        setDisplay('Error');
        setLastOperator(null);
        setLastNumber(null);
        setShouldResetDisplay(true);
        return;
      }

      setDisplay(String(result));
      setShouldResetDisplay(true);
    }
  };

  const handleClearPress = () => {
    setDisplay('0');
    setFirstNumber(null);
    setOperator(null);
    setShouldResetDisplay(false);

    setLastOperator(null);
    setLastNumber(null);
  };

  const handleBackspacePress = () => {
    if (shouldResetDisplay) {
      setDisplay('0');
      setShouldResetDisplay(false);
      return;
    }

    if (display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const handlePercentagePress = () => {
    const currentNumber = Number(display);

    if (firstNumber !== null && operator !== null) {
      const result = calculatePercentage(
        firstNumber,
        currentNumber,
        operator
      );

      setDisplay(String(result));
      setShouldResetDisplay(true);
      return;
    }

    const result = currentNumber / 100;

    setDisplay(String(result));
    setShouldResetDisplay(true);
  };

  const getDisplayFontSize = () => {
    if (display.length <= 6) {
      return 64;
    }

    if (display.length <= 9) {
      return 50;
    }

    if (display.length <= 12) {
      return 40;
    }

    return 32;
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text
          style={[
            styles.displayText,
            { fontSize: getDisplayFontSize() },
          ]}
        >
          {display}
        </Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.row}>
          <CalculatorButton
            value="AC"
            onPress={handleClearPress}
            variant="action"
          />

          <CalculatorButton
            value="⌫"
            onPress={handleBackspacePress}
            variant="action"
          />

          <CalculatorButton
            value="%"
            onPress={handlePercentagePress}
            variant="action"
          />

          <CalculatorButton
            value="÷"
            onPress={() => handleOperatorPress('/')}
            variant="operator"
          />
        </View>

        <View style={styles.row}>
          <CalculatorButton
            value="7"
            onPress={() => handleNumberPress('7')}
          />

          <CalculatorButton
            value="8"
            onPress={() => handleNumberPress('8')}
          />

          <CalculatorButton
            value="9"
            onPress={() => handleNumberPress('9')}
          />

          <CalculatorButton
            value="×"
            onPress={() => handleOperatorPress('*')}
            variant="operator"
          />
        </View>

        <View style={styles.row}>
          <CalculatorButton
            value="4"
            onPress={() => handleNumberPress('4')}
          />

          <CalculatorButton
            value="5"
            onPress={() => handleNumberPress('5')}
          />

          <CalculatorButton
            value="6"
            onPress={() => handleNumberPress('6')}
          />

          <CalculatorButton
            value="−"
            onPress={() => handleOperatorPress('-')}
            variant="operator"
          />
        </View>

        <View style={styles.row}>
          <CalculatorButton
            value="1"
            onPress={() => handleNumberPress('1')}
          />

          <CalculatorButton
            value="2"
            onPress={() => handleNumberPress('2')}
          />

          <CalculatorButton
            value="3"
            onPress={() => handleNumberPress('3')}
          />

          <CalculatorButton
            value="+"
            onPress={() => handleOperatorPress('+')}
            variant="operator"
          />
        </View>

        <View style={styles.row}>
          <CalculatorButton
            value="0"
            onPress={() => handleNumberPress('0')}
          />

          <CalculatorButton
            value="."
            onPress={handleDecimalPress}
          />

          <CalculatorButton
            value="="
            onPress={handleEqualPress}
            variant="operator"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'flex-end',
  },

  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },

  displayText: {
    color: '#fff',
  },

  buttons: {
    gap: 10,
  },

  row: {
    flexDirection: 'row',
    gap: 10,
  },
});