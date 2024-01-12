import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Barang = {
  'Barang1': 10,
  'Barang2': 15,
  'Barang3': 20,
  'Barang4': 25,
  'Barang5': 30,
};

const ShopScreen = ({ navigation }) => {
  const [pilihanBarang, setPilihanBarang] = useState('');
  const [quantity, setQuantity] = useState('');

  const tambahkanKeKeranjang = async () => {
    try {
      if (!pilihanBarang || !quantity) {
        throw new Error('Pilihan barang dan quantity harus diisi.');
      }

      const barang = Barang[pilihanBarang];
      if (!barang) {
        throw new Error('Pilihan barang tidak valid.');
      }

      const qty = parseInt(quantity, 10);
      if (isNaN(qty) || qty <= 0) {
        throw new Error('Quantity harus angka positif.');
      }

      const existingCartString = await AsyncStorage.getItem('@storage_Key');
      const existingCart = existingCartString ? JSON.parse(existingCartString) : {};

      if (pilihanBarang in existingCart) {
        existingCart[pilihanBarang].quantity += qty;
      } else {
        existingCart[pilihanBarang] = {
          quantity: qty,
          harga: barang,
        };
      }

      await AsyncStorage.setItem('@storage_Key', JSON.stringify(existingCart));

      Alert.alert('Berhasil', 'Barang berhasil ditambahkan ke keranjang.' + JSON.stringify(existingCart));
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Barang:</Text>
      {Object.entries(Barang).map(([namaBarang, harga]) => (
        <Text key={namaBarang}>{`${namaBarang}: Rp ${harga}`}</Text>
      ))}

      <TextInput
        style={styles.input}
        placeholder="Pilih barang (1-5)"
        onChangeText={(text) => setPilihanBarang(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Masukkan quantity"
        onChangeText={(text) => setQuantity(text)}
        keyboardType="numeric"
      />
      <Button title="Tambahkan ke Keranjang" onPress={tambahkanKeKeranjang} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default ShopScreen;
