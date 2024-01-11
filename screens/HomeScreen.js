   // screens/HomeScreen.js
   import React from 'react';
   import { View, Text, Button } from 'react-native';
 
   export default function HomeScreen({ navigation }) {
     return (
       <View>
         <Text>Halaman Beranda</Text>
         <Button
           title="Calculator"
           onPress={() => navigation.navigate('Calculator')}
         />
          <Button
           title="Search"
           onPress={() => navigation.navigate('Search')}
         />
       </View>
     );
   }