// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const CustomSplashScreen = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
    // Tambahkan kode untuk menavigasi ke layar berikutnya setelah beberapa detik
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // 2000 milliseconds (2 detik)
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default CustomSplashScreen;
