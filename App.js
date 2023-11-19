import { StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

// import { initializeApp } from '@react-native-firebase/app';

import LoginScreen from './screens/loginscreen';
import Homescreen from './screens/homescreen';
import Quizscreen from './screens/QuizScreen';

// initializeApp();

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name = 'LoginScreen' component ={LoginScreen} />  
      <Stack.Screen name = 'HomeScreen' component = {Homescreen} />
      <Stack.Screen name = 'Quizscreen' component = {Quizscreen} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
