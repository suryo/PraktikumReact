   // screens/HomeScreen.js
   import React from 'react';
  import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
  Button
} from 'react-native';
import {ImageHeader, Logo} from '../screens/assets';
import {Saldo, PesananAktif} from '../screens/components/';
import ButtonIcon from '../screens/components/ButtonIcon';
import {WARNA_ABU_ABU} from '../screens/utils/constant';
import {ScrollView} from 'react-native-gesture-handler';

 
   export default function HomeScreen({ navigation }) {
     return (

<View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang, </Text>
            <Text style={styles.username}>Suryo</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Our Product</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="T-Shirt" type="layanan"/>
            <ButtonIcon title="Pants" type="layanan" />
            <ButtonIcon title="Backpack" type="layanan" />
            <ButtonIcon title="Footware" type="layanan" />
            <ButtonIcon title="Outdoor" type="layanan" />
            <ButtonIcon title="Pouch" type="layanan" />
            <ButtonIcon title="Shoes" type="layanan" />
            <ButtonIcon title="Belt" type="layanan" />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Pesanan Aktif</Text>
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
          <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci"/>
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai"/>
        </View>
      </ScrollView>
    </View>
     );

   }

   const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowHeight * 0.03,
  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
