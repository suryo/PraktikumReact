import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const data = [
 { id: '1', name: 'Pantai Sunset', desc: 'Sebuah pantai yang indah dengan pesawah matahari terbenam', rating: 4, price: 50000 },
 { id: '2', name: 'Gunung Merapi', desc: 'Sebuah gunung berapi yang terkenal dengan keindahannya', rating: 5, price: 80000 },
 { id: '3', name: 'Danau Toba', desc: 'Danau terbesar di Asia Tenggara yang memiliki keunikan alam', rating: 4, price: 60000 },
];

const App = () => {
 const [search, setSearch] = useState('');
 const [filteredData, setFilteredData] = useState(data);

 const searchFilterFunction = (text) => {
    setSearch(text);
    const newData = data.filter((item) => {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
 };

 const ratingFilterFunction = (rating) => {
    setSearch(rating);
    const newData = data.filter((item) => {
      return item.rating === parseInt(rating);
    });
    setFilteredData(newData);
 };

 const priceFilterFunction = (price) => {
    setSearch(price);
    const newData = data.filter((item) => {
      return item.price === parseInt(price);
    });
    setFilteredData(newData);
 };

 return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={searchFilterFunction}
        value={search}
        placeholder="Cari tempat wisata"
      />
      <Button title="Rating 4" onPress={() => ratingFilterFunction('4')} />
      <Button title="Rating 5" onPress={() => ratingFilterFunction('5')} />
      <Button title="Harga < 70000" onPress={() => priceFilterFunction('70000')} />
      <Button title="Harga >= 70000" onPress={() => priceFilterFunction('70000')} />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <Text style={styles.rating}>Rating: {item.rating}</Text>
            <Text style={styles.price}>Harga: {item.price}</Text>
          </View>
        )}
      />
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
 listItem: {
    marginBottom: 10,
 },
 name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
 },
 desc: {
    fontSize: 14,
    marginBottom: 5,
 },
 rating: {
    fontSize: 14,
    marginBottom: 5,
 },
 price: {
    fontSize: 14,
 },
});

export default App;