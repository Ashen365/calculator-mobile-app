import { Pressable, StyleSheet, Text } from 'react-native';

type CalculatorButtonProps = {
  value: string;
  onPress: () => void;
  variant?: 'number' | 'operator' | 'action';
};

export function CalculatorButton({
  value,
  onPress,
  variant = 'number',
}: CalculatorButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        variant === 'operator' && styles.operatorButton,
        variant === 'action' && styles.actionButton,
        pressed &&
          variant === 'operator' &&
          styles.pressedOperatorButton,
        pressed &&
          variant !== 'operator' &&
          styles.pressedButton,
      ]}
      onPress={onPress}
    >
      {({ pressed }) => (
        <Text
          style={[
            styles.buttonText,
            pressed &&
              variant === 'operator' &&
              styles.pressedOperatorText,
          ]}
        >
          {value}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  operatorButton: {
    backgroundColor: '#ff9500',
  },

  pressedOperatorButton: {
    backgroundColor: '#fff',
  },

  actionButton: {
    backgroundColor: '#a5a5a5',
  },

  pressedButton: {
    opacity: 0.6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 28,
  },

  pressedOperatorText: {
    color: '#ff9500',
  },
});