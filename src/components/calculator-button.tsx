import { Pressable, StyleSheet, Text } from 'react-native';

type CalculatorButtonProps = {
  value: string;
  onPress: () => void;
};

export function CalculatorButton({
  value,
  onPress,
}: CalculatorButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
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

  buttonText: {
    color: '#fff',
    fontSize: 28,
  },
});