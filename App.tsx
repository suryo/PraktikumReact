import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const Barang = { 'Barang1': 10, 'Barang2': 15, 'Barang3': 20, 'Barang4': 25, 'Barang5': 30 };

const App = () => {
  const [menu, setMenu] = useState('');
  const [pilihanBarang, setPilihanBarang] = useState('');
  const [quantity, setQuantity] = useState('');
  const [voucher, setVoucher] = useState('');
  const [hapusBarang, setHapusBarang] = useState('');

  const [keranjang, setKeranjang] = useState({});
  const [totalHargaKeranjang, setTotalHargaKeranjang] = useState(0);

  const tampilkanMenu = () => {
    return (
      <View>
        <Text>Selamat datang di Aplikasi Penjualan</Text>
        <Text>1. Menu Barang</Text>
        <Text>2. Keranjang</Text>
        <Text>3. Close</Text>
      </View>
    );
  };

  const menuBarang = () => {
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

  const cekPromoBarang1 = () => {
    const barang1 = keranjang['Barang1'];
    if (barang1 && barang1.quantity >= 3) {
      const promoQty = 3;
      const div = Math.floor(barang1.quantity / promoQty);

      let updateHarga = 0;
      if (barang1.quantity === promoQty) {
        updateHarga = barang1.quantity * 25;
      } else if (barang1.quantity > promoQty) {
        updateHarga = div * 25 + (barang1.quantity - promoQty * div) * Barang['Barang1'];
      }

      const updateHargaSatuan = updateHarga / barang1.quantity;
      barang1.harga = updateHargaSatuan;
    }
  };

 // ...

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
    // Menampilkan alert "Error" jika terjadi error
    Alert.alert('Error', error.message);
  }
};

// ...


  const menuKeranjang = () => {
    return (
      <View>
        <Text>Isi Keranjang:</Text>
        {Object.entries(keranjang).map(([namaBarang, dataBarang]) => (
          <Text key={namaBarang}>
            {`${namaBarang}: ${dataBarang.quantity} pcs - Total Harga: Rp ${dataBarang.harga * dataBarang.quantity}`}
          </Text>
        ))}
        <TextInput
          placeholder="Masukkan kode voucher (PROMO1, PROMO2, PROMO3)"
          onChangeText={(text) => setVoucher(text)}
        />
        <Button title="Cek Promo & Hitung Total Harga" onPress={hitungTotalHarga} />
        <TextInput
          placeholder="Masukkan barang yang ingin dihapus (1-5)"
          onChangeText={(text) => setHapusBarang(text)}
        />
        <Button title="Hapus Barang dari Keranjang" onPress={hapusDariKeranjang} />
      </View>
    );
  };

  const hitungTotalHarga = () => {
    let totalHarga = 0;

    Object.entries(keranjang).forEach(([namaBarang, dataBarang]) => {
      totalHarga += dataBarang.harga * dataBarang.quantity;
    });

    setTotalHargaKeranjang(totalHarga);

    cekVoucher(); // Cek voucher setelah menghitung total harga
  };

  const cekVoucher = () => {
    let diskon = 0;

    switch (voucher) {
      case 'PROMO1':
        diskon = totalHargaKeranjang * 0.1;
        break;
      case 'PROMO2':
        diskon = totalHargaKeranjang * 0.15;
        break;
      case 'PROMO3':
        diskon = 10;
        break;
      default:
        break;
    }

    setTotalHargaKeranjang(totalHargaKeranjang - diskon);
  };

  const hapusDariKeranjang = () => {
    if (!hapusBarang) {
      Alert.alert('Error', 'Pilihan barang untuk dihapus harus diisi.');
      return;
    }

    const updatedKeranjang = { ...keranjang };
    if (hapusBarang in updatedKeranjang) {
      delete updatedKeranjang[hapusBarang];
    } else {
      Alert.alert('Error', 'Pilihan barang untuk dihapus tidak valid.');
      return;
    }

    setKeranjang(updatedKeranjang);
    setHapusBarang('');
  };

  const jalankanMenu = () => {
    switch (menu) {
      case '1':
        return menuBarang();
      case '2':
        return menuKeranjang();
      case '3':
        Alert.alert('Terima kasih!', 'Aplikasi ditutup.');
        break;
      default:
        return tampilkanMenu();
    }
  };

  const handleMenu = () => {
    jalankanMenu(); // Panggil fungsi jalankanMenu di sini
  };

  return (
    <View>
      {jalankanMenu()}
      <TextInput placeholder="Pilih menu (1-3)" onChangeText={(text) => setMenu(text)} />
      <Button title="Jalankan Menu" onPress={handleMenu} />
    </View>
  );
};

export default App;
