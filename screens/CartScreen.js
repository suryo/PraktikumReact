import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

const CartScreen = () => {
  const [storedData, setStoredData] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');

  useEffect(() => {
    fetchData();
    hitungTotalHarga(); // Memanggil fungsi hitungTotalHarga saat komponen pertama kali dirender
  }, []);

  const fetchData = async () => {
    try {
      const data = await AsyncStorage.getItem('@shopping_cart');
      if (data !== null) {
        setStoredData(JSON.parse(data));
        //var cart = JSON.parse(data);
        
        //Alert.alert("kucing"+cart);
        // hitungTotalHarga(); // Pindahkan ini ke useEffect agar dihitung di awal screen
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
    // Alert.alert("kucing"+total);
  };

  const applyDiscount = () => {
    let discount = 0;
    switch (voucherCode) {
      case 'PROMO1':
        discount = totalHarga * 0.1;
        break;
      case 'PROMO2':
        discount = totalHarga * 0.15;
        break;
      case 'PROMO3':
        discount = 10;
        break;
      default:
        setIsModalVisible(false);
        return;
    }

    const updatedTotalHarga = totalHarga - discount;
    setTotalHarga(updatedTotalHarga);
    setIsModalVisible(false);
  };

  const removeItem = (namaBarang) => {
    const updatedCart = { ...storedData };
    delete updatedCart[namaBarang];

    setStoredData(updatedCart);
    AsyncStorage.setItem('@shopping_cart', JSON.stringify(updatedCart));
    hitungTotalHarga();
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{`${item[0]} @Rp ${item[1].harga} | QTY : ${item[1].quantity} | SubTotal : ${(item[1].harga) * (item[1].quantity)}`}</Text>
      <Button title="Remove" onPress={() => removeItem(item[0])} color="#fd4f00" />
    </View>
  );

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.label}>Isi Keranjang:</Text>
      </View>
      <FlatList
        data={Object.entries(storedData)}
        renderItem={renderItem}
        keyExtractor={(item) => item[0]}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.labelTotal}>Total Harga:</Text>
        <Text style={styles.total}>{`Rp ${totalHarga}`}</Text>
      </View>
      <Button title="Cek Promo & Hitung Total Harga" onPress={() => setIsModalVisible(true)} color="#fd4f00" />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        useNativeDriver={true}
        style={styles.modal}
      >
        <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Input Voucher:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan kode voucher"
          onChangeText={(text) => setVoucherCode(text)}
        />
        <Button title="Apply" onPress={applyDiscount} color="#fd4f00" />
        <Button title="Cancel" onPress={() => setIsModalVisible(false)} color="#fd4f00" />
      </Modal>
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
    backgroundColor: '#fd4f00',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  labelTotal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 18,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default CartScreen;
