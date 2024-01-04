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

        <Button
           title="Text Component"
           onPress={() => navigation.navigate('Text_component')}
         />

        <Button
           title="Text input Component"
           onPress={() => navigation.navigate('Text_input_component')}
         />

        <Button
           title="Button"
           onPress={() => navigation.navigate('Button_component')}
         />


        <Button
           title="Image"
           onPress={() => navigation.navigate('Image_component')}
         />

        <Button
           title="Switch"
           onPress={() => navigation.navigate('Switch_component')}
         />

<Button
           title="Status Bar"
           onPress={() => navigation.navigate('Status_bar_component')}
         />

        <Button
           title="Activity Indicator"
           onPress={() => navigation.navigate('Activity_indicator_component')}
         />

        <Button
           title="Modal"
           onPress={() => navigation.navigate('Modal_component')}
         />

       </View>
     );
   }