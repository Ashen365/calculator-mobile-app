import { Pressable, StyleSheet, Text } from 'react-native';

type CalculatorButtonProps = {
  value: string;
  onPress: () => void;
  variant?: 'number' | 'operator' | 'action';
  isActive?: boolean;
};

export function CalculatorButton({
  value,
  onPress,
  variant = 'number',
  isActive = false,
}: CalculatorButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        variant === 'operator' && styles.operatorButton,
        variant === 'action' && styles.actionButton,
        isActive && styles.activeOperatorButton,
        pressed && styles.pressedButton,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{value}</Text>
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

  activeOperatorButton: {
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
});