import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import StartScreen from '../screens/signIn';
import Verify from '../screens/verify';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        ...TransitionPresets.FadeFromBottomAndroid,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        backgroundColor: 'black',
        headerShown: false
      }}>
        <Stack.Screen name="Start" component={StartScreen}/>
        <Stack.Screen name="Verify" component={Verify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
