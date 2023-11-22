import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';

const KalkulatorScreen = () => {
 const [angka1, setAngka1] = useState('');
 const [angka2, setAngka2] = useState('');
 const [hasil, setHasil] = useState('');

 const penjumlahan = () => {
    const result = parseInt(angka1) + parseInt(angka2);
    setHasil(result);
 };

 const pengurangan = () => {
    const result = parseInt(angka1) - parseInt(angka2);
    setHasil(result);
 };

 const perkalian = () => {
    const result = parseInt(angka1) * parseInt(angka2);
    setHasil(result);
 };

 const pembagian = () => {
    const result = parseInt(angka1) / parseInt(angka2);
    setHasil(result);
 };

 return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setAngka1}
        value={angka1}
        placeholder="Masukkan angka pertama"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAngka2}
        value={angka2}
        placeholder="Masukkan angka kedua"
      />
      <TouchableOpacity style={styles.button} onPress={penjumlahan}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={pengurangan}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={perkalian}>
        <Text style={styles.buttonText}>x</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={pembagian}>
        <Text style={styles.buttonText}>/</Text>
      </TouchableOpacity>
      <Text style={styles.hasil}>Hasil: {hasil}</Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
 },
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
 },
 button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
 },
 buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
 },
 hasil: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
 },
});

export default KalkulatorScreen;