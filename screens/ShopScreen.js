// BarangScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
const Barang = { 'Barang1': 10, 'Barang2': 15, 'Barang3': 20, 'Barang4': 25, 'Barang5': 30 };

const ShopScreen = ({ navigation }) => {
  const [pilihanBarang, setPilihanBarang] = useState('');
  const [quantity, setQuantity] = useState('');

  const tambahkanKeKeranjang = () => {
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
  
      const updatedKeranjang = { ...keranjang };
  
      if (pilihanBarang in updatedKeranjang) {
        updatedKeranjang[pilihanBarang].quantity += qty;
      } else {
        updatedKeranjang[pilihanBarang] = {
          quantity: qty,
          harga: barang,
        };
      }
  
      setKeranjang(updatedKeranjang);
      setPilihanBarang('');
      setQuantity('');
  
      cekPromoBarang1(); // Cek promo Barang1 setelah menambahkan ke keranjang
  
      // Menampilkan alert "Berhasil"
      Alert.alert('Berhasil', 'Barang berhasil ditambahkan ke keranjang.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      <Text>Daftar Barang:</Text>
      {Object.entries(Barang).map(([namaBarang, harga]) => (
          <Text key={namaBarang}>{`${namaBarang}: Rp ${harga}`}</Text>
        ))}

        <TextInput
          placeholder="Pilih barang (1-5)"
          onChangeText={(text) => setPilihanBarang(text)}
        />
        <TextInput
          placeholder="Masukkan quantity"
          onChangeText={(text) => setQuantity(text)}
          keyboardType="numeric"
        />
      <Button title="Tambahkan ke Keranjang" onPress={tambahkanKeKeranjang} />
    </View>
  );
};

export default ShopScreen;
