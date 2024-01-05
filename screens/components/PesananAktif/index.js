import React from 'react';
import {StyleSheet, Text,View, Dimensions, TouchableOpacity} from 'react-native';
import {IconPesananAktif} from '../../../screens/assets';
import { WARNA_UTAMA, WARNA_WARNING, WARNA_ABU_ABU } from '../../../screens/utils/constant';
import Svg, { Path } from 'react-native-svg';

const PesananAktif = ({title, status}) => {
  const MyIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z" />
    </Svg>
  );
  return (
    <TouchableOpacity style={styles.container}>
      <MyIcon />
      <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight*0.02,
    alignItems: 'center'
  },
  text: {
    marginLeft: windowWidth*0.02,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold'
  },
  status: (status) => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color: status === 'Sudah Selesai' ? WARNA_UTAMA : status === 'Masih Dicuci' ? WARNA_WARNING : WARNA_ABU_ABU,
  })
});
