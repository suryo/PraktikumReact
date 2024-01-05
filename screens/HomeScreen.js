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
//        <View>
//          <Text>Halaman Beranda</Text>
//          <Button
//            title="Calculator"
//            onPress={() => navigation.navigate('Calculator')}
//          />
//           <Button
//            title="Search"
//            onPress={() => navigation.navigate('Search')}
//          />

//         <Button
//            title="Text Component"
//            onPress={() => navigation.navigate('Text_component')}
//          />

//         <Button
//            title="Text input Component"
//            onPress={() => navigation.navigate('Text_input_component')}
//          />

//         <Button
//            title="Button"
//            onPress={() => navigation.navigate('Button_component')}
//          />


//         <Button
//            title="Image"
//            onPress={() => navigation.navigate('Image_component')}
//          />

//         <Button
//            title="Switch"
//            onPress={() => navigation.navigate('Switch_component')}
//          />

// <Button
//            title="Status Bar"
//            onPress={() => navigation.navigate('Status_bar_component')}
//          />

//         <Button
//            title="Activity Indicator"
//            onPress={() => navigation.navigate('Activity_indicator_component')}
//          />

//         <Button
//            title="Modal"
//            onPress={() => navigation.navigate('Modal_component')}
//          />

//        </View>
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
          <Text style={styles.label}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Kalkulator" type="layanan"/>
            <ButtonIcon title="Satuan" type="layanan" />
            <ButtonIcon title="VIP" type="layanan" />
            <ButtonIcon title="Karpet" type="layanan" />
            <ButtonIcon title="Setrika" type="layanan" />
            <ButtonIcon title="Ekspress" type="layanan" />
            <ButtonIcon title="Setrika" type="layanan" />
            <ButtonIcon title="Ekspress" type="layanan" />
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
    fontSize: 22,
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
