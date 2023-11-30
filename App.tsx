import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import SearchScreen from './screens/SearchScreen';
import SplashScreen from './screens/CustomSplashScreen';
import CameraScreen from './screens/CameraScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: 'Camera' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;