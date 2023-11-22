
# Praktikum Mobile Application with React Native

Praktikum_3 : Navigation


## Authors

- [@suryo](https://www.github.com/suryo)


## Installation

clone repo from github

```bash
  cd PraktikumReact
  git checkout praktikum_3
  npm install
```

After instalation complete, check environment with this command

```bash
  npx react-native doctor
```

to run on android, please run this command

```bash
  npx react-native run-android
```

Cara install react navigation:
```bash
npm install @react-navigation/native
```

Untuk penggunaan Stack.Navigator atau BottomTab.Navigator pada versi baru React Navigation, perlu melakukan installasi tambahan. Contoh:

```bash

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
Untuk menginstal Stack.Navigator, lakukan:

```bash

npm install @react-navigation/stack
```
Untuk menginstal BottomTab.Navigator, lakukan:

```bash

npm install @react-navigation/bottom-tabs
```
## Documentation

Contoh menggunakan createStackNavigator:

```bash
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

Contoh menggunakan createBottomTabNavigator:

```bash
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import SearchScreen from './screens/SearchScreen';
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calculator" component={CalculatorScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

