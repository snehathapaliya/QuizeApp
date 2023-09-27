import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const boxesData = [
    { id: 1, text: 'Question1' },
    { id: 2, text: 'Question2' },
    { id: 3, text: 'Question3' },
    { id: 4, text: 'Question4' },
    { id: 5, text: 'Question5' },
  ];
  return (
    <View style={styles.container}>
      <Text>Quiz App</Text>
      <StatusBar style="auto" />
      {boxesData.map((box) => (
        <View key={box.id} style={styles.box}>
          <Text style={styles.boxText}>{box.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
