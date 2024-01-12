import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WARNA_ABU_ABU } from '../screens/utils/constant';
import { ScrollView } from 'react-native-gesture-handler';

const CartScreen = () => {
  const [storedData, setStoredData] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);

  useEffect(() => {
    fetchData();
     // Call hitungTotalHarga when the screen is loaded
  }, []);

  const fetchData = async () => {
    try {
      const data = await AsyncStorage.getItem('@storage_Key');
      if (data !== null) {
        setStoredData(JSON.parse(data));
        hitungTotalHarga();
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  const hitungTotalHarga = () => {
    let total = 0;

    Object.entries(storedData).forEach(([namaBarang, cart]) => {
      total += cart.harga * cart.quantity;
    });

    setTotalHarga(total);

    // Call the cekVoucher or any other logic you want
    cekVoucher();
  };

  const cekVoucher = () => {
    // Implement your voucher logic here
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{`${item.namaBarang} @Rp ${item.cart.harga} | QTY : ${item.cart.quantity} | SubTotal : ${(item.cart.harga) * (item.cart.quantity)}`}</Text>
    </View>
  );

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
        <Text style={styles.label}>Isi Keranjang:</Text>
          <FlatList
            data={Object.entries(storedData).map(([namaBarang, cart]) => ({ key: namaBarang, namaBarang, cart }))}
            renderItem={renderItem}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.labelTotal}>Total Harga:</Text>
            <Text style={styles.total}>{`Rp ${totalHarga}`}</Text>
          </View>
          <Button title="Cek Promo & Hitung Total Harga" onPress={hitungTotalHarga} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  labelTotal: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  total: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Regular',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CartScreen;
