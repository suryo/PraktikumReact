import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import SearchScreen from './screens/SearchScreen';
import SplashScreen from './screens/CustomSplashScreen';

import Text_component from './screens/component/Text_component';
import Text_input_component from './screens/component/Text_input_component';
import Button_component from './screens/component/Button_component';
import Image_component from './screens/component/Image_component';

import Switch_component from './screens/component/Switch_component';
import Status_bar_component from './screens/component/Status_bar_component';
import Activity_indicator_component from './screens/component/Activity_indicator_component';

import Modal_component from './screens/component/Modal_component';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />


        <Stack.Screen name="Text_component" component={Text_component} />
        <Stack.Screen name="Text_input_component" component={Text_input_component} />
        <Stack.Screen name="Button_component" component={Button_component} />
        <Stack.Screen name="Image_component" component={Image_component} />
        <Stack.Screen name="Switch_component" component={Switch_component} />
        <Stack.Screen name="Status_bar_component" component={Status_bar_component} />
        <Stack.Screen name="Activity_indicator_component" component={Activity_indicator_component} />
        <Stack.Screen name="Modal_component" component={Modal_component} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;