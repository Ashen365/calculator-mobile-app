import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CalculatorButton } from '../components/calculator-button';

export default function HomeScreen() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  // Handle number button presses
  const handleNumberPress = (number: string) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  // Handle decimal button
  const handleDecimalPress = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  // Handle operator button presses
  const handleOperatorPress = (selectedOperator: string) => {
    setFirstNumber(Number(display));
    setOperator(selectedOperator);
    setDisplay('0');
  };

  // Handle equal button
  const handleEqualPress = () => {
    if (firstNumber === null || operator === null) {
      return;
    }

    const secondNumber = Number(display);
    let result = 0;

    if (operator === '+') {
      result = firstNumber + secondNumber;
    } else if (operator === '-') {
      result = firstNumber - secondNumber;
    } else if (operator === '*') {
      result = firstNumber * secondNumber;
    } else if (operator === '/') {
      result = firstNumber / secondNumber;
    }

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
  };

  // Handle AC / Clear button
  const handleClearPress = () => {
    setDisplay('0');
    setFirstNumber(null);
    setOperator(null);
  };

  // Handle backspace button
  const handleBackspacePress = () => {
    if (display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  // Handle percentage button
  const handlePercentagePress = () => {
    const number = Number(display);
    const result = number / 100;

    setDisplay(String(result));
  };

  return (
    <View style={styles.container}>

      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      {/* Calculator Buttons */}
      <View style={styles.buttons}>

        {/* Row 1 */}
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

        {/* Row 2 */}
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

        {/* Row 3 */}
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

        {/* Row 4 */}
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

        {/* Row 5 */}
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
    fontSize: 64,
  },

  buttons: {
    gap: 10,
  },

  row: {
    flexDirection: 'row',
    gap: 10,
  },
});