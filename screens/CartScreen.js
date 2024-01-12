import React, { useEffect,useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShopScreen = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [storedData, setStoredData] = useState('');



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await AsyncStorage.getItem('@storage_Key');
      if (data !== null) {
        console.log(data);
        setStoredData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const hitungTotalHarga = () => {
    let totalHarga = 0;

    Object.entries(keranjang).forEach(([namaBarang, dataBarang]) => {
      totalHarga += dataBarang.harga * dataBarang.quantity;
    });

    setTotalHargaKeranjang(totalHarga);

    cekVoucher(); // Cek voucher setelah menghitung total harga
  };

  return (
    <View>
       <View>
      <Text>Isi Keranjang:</Text>
      {/* ... (kode lainnya) */}
      <Button title="Cek Promo & Hitung Total Harga" onPress={hitungTotalHarga} />
    </View>
      <Text style={styles.result}>Hasil: {storedData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 10,
  },
  result: {fontSize: 24},
});

export default ShopScreen;
