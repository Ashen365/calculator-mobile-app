import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>0</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </View>

          <View style={styles.operatorButton}>
            <Text style={styles.buttonText}>÷</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </View>

          <View style={styles.operatorButton}>
            <Text style={styles.buttonText}>×</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </View>

          <View style={styles.operatorButton}>
            <Text style={styles.buttonText}>−</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.button, styles.zeroButton]}>
            <Text style={styles.buttonText}>0</Text>
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>.</Text>
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>=</Text>
          </View>

          <View style={styles.operatorButton}>
            <Text style={styles.buttonText}>+</Text>
          </View>
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

  button: {
    flex: 1,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  zeroButton: {
    flex: 1,
  },

  operatorButton: {
    flex: 1,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#ff9500',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 28,
  },
});