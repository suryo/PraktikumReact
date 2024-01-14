import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WARNA_ABU_ABU } from '../screens/utils/constant';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const CartScreen = () => {
  const [storedData, setStoredData] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');

  useEffect(() => {
    fetchData();
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
  };

  const applyDiscount = () => {
    let discount = 0;
    setTotalHarga(updatedTotalHarga);
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
        setIsModalVisible(false); // Close the modal if the voucher is not recognized
        return; // Exit the function to avoid updating totalHarga
    }
  
    const updatedTotalHarga = totalHarga - discount;
    setTotalHarga(updatedTotalHarga);
    setIsModalVisible(false);
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
          <Button title="Cek Promo & Hitung Total Harga" onPress={() => setIsModalVisible(true)} />
        </View>

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          useNativeDriver={true}
          style={styles.modal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Input Voucher:</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan kode voucher"
              onChangeText={(text) => setVoucherCode(text)}
            />
            <Button title="Apply" onPress={applyDiscount} />
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
          </View>
        </Modal>
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
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    height: '60%', // Adjust the height as needed
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
