import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Barang = {
  'Barang1': { harga: 10, image: require('../assets/imagenotavailable.jpg') },
  'Barang2': { harga: 15, image: require('../assets/imagenotavailable.jpg') },
  'Barang3': { harga: 20, image: require('../assets/imagenotavailable.jpg') },
  'Barang4': { harga: 25, image: require('../assets/imagenotavailable.jpg') },
  'Barang5': { harga: 30, image: require('../assets/imagenotavailable.jpg') },
  'Barang6': { harga: 10, image: require('../assets/imagenotavailable.jpg') },
  'Barang7': { harga: 15, image: require('../assets/imagenotavailable.jpg') },
  'Barang8': { harga: 20, image: require('../assets/imagenotavailable.jpg') },
  'Barang9': { harga: 25, image: require('../assets/imagenotavailable.jpg') },
  'Barang10': { harga: 30, image: require('../assets/imagenotavailable.jpg') },
  // ... (other items)
};

const STORAGE_KEY = '@shopping_cart';

const ShopScreen = ({ navigation }) => {
  const [pilihanBarang, setPilihanBarang] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (barang) => {
    setPilihanBarang(barang);
    setQuantity('');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const tambahkanKeKeranjang = async () => {
    try {
      setLoading(true);

      if (!quantity) {
        throw new Error('Quantity harus diisi.');
      }

      const barang = Barang[pilihanBarang];
      if (!barang) {
        throw new Error('Pilihan barang tidak valid.');
      }

      const qty = parseInt(quantity, 10);
      if (isNaN(qty) || qty <= 0) {
        throw new Error('Quantity harus angka positif.');
      }

      const existingCartString = await AsyncStorage.getItem(STORAGE_KEY);
      const existingCart = existingCartString ? JSON.parse(existingCartString) : {};

      if (pilihanBarang in existingCart) {
        existingCart[pilihanBarang].quantity += qty;
      } else {
        existingCart[pilihanBarang] = {
          quantity: qty,
          harga: barang.harga,
        };
      }

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(existingCart));

      Alert.alert('Berhasil', 'Barang berhasil ditambahkan ke keranjang.');
      closeModal();
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Barang:</Text>
      <View style={styles.itemContainer}>
        {Object.entries(Barang).map(([namaBarang, { harga, image }]) => (
          <TouchableOpacity
            key={namaBarang}
            style={styles.item}
            onPress={() => openModal(namaBarang)}
          >
            <Image source={image} style={styles.image} />
            <Text>{`${namaBarang}`}</Text>
            <Text>{`Rp ${harga}`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Masukkan quantity"
              onChangeText={(text) => setQuantity(text)}
              keyboardType="numeric"
            />
            <Button
              title={loading ? 'Loading...' : 'Tambahkan ke Keranjang'}
              onPress={tambahkanKeKeranjang}
              disabled={loading}
              color="#fd4f00"
            />
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  closeButton: {
    backgroundColor: '#fd4f00',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ShopScreen;
