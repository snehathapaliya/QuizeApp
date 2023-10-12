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
    <HomeScreen/>
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
