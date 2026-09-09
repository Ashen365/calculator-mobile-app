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
      style={[
        styles.button,
        variant === 'operator' && styles.operatorButton,
        variant === 'action' && styles.actionButton,
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

  actionButton: {
    backgroundColor: '#a5a5a5',
  },

  buttonText: {
    color: '#fff',
    fontSize: 28,
  },
});