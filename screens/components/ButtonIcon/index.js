import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import IconHome from '../../../screens/assets/icons/home.svg';
import {WARNA_SEKUNDER} from '../../../screens/utils/constant';
import { useNavigation } from '@react-navigation/native';
const ButtonIcon = ({title, type}) => {

  const navigation = useNavigation();  // Access the navigation prop using the useNavigation hook

  const MyIcon = () => (
    <Svg width="35" height="35">
      <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z" />
    </Svg>
    
  );

  const handlePress = () => {
    // Navigate to the 'Calculator' screen when the button is pressed
    navigation.navigate('Calculator');
  };

  const HIcon = () => {
    return <IconHome />
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={handlePress}>
      <View style={styles.button(type)}>
       <MyIcon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};


export default ButtonIcon;

const styles = StyleSheet.create({
  container: (type) => ({
      marginBottom : type === "layanan" ? 12 : 0,
      marginRight : type === "layanan" ? 30 : 0
  }), 
  button: (type) => ({
    backgroundColor: WARNA_SEKUNDER,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: type === 'layanan' ? 14 : 10,
    fontFamily:type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),

});
