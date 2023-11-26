// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const CustomSplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Tambahkan kode untuk menavigasi ke layar berikutnya setelah beberapa detik
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // 2000 milliseconds (2 detik)
  }, [navigation]);

  return (
    <View style={styles.container}>
    <Image source={require('../assets/logo/BRAINWARELINK.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Ganti warna latar sesuai keinginan Anda
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default CustomSplashScreen;
