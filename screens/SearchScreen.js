import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';

const cities = [
    'Surabaya', 
    'Malang', 
    'Gresik', 
    'Sidoarjo', 
    'Lamongan'];
const SearchScreen = () => { const [searchQuery, setSearchQuery] = useState(''); const [filteredCities, setFilteredCities] = useState([]);

const search = (text) => {
    setSearchQuery(text);

    if (text === '') {
        setFilteredCities([]);
    } else {
        const filtered = cities.filter((city) => city.toLowerCase().includes(text.toLowerCase()));
        setFilteredCities(filtered);
    }
};

const renderItem = ({ item }) => <Text style={styles.city}>{item}</Text>;

return (
    <View style={styles.container}>
        <TextInput
            style={styles.searchBar}
            placeholder="Cari kota..."
            onChangeText={search}
            value={searchQuery}
        />
        <FlatList
            data={filteredCities}
            renderItem={renderItem}
            keyExtractor={(item) => item}
        />
    </View>
);

};

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', }, searchBar: { width: '80%', borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 10, }, city: { fontSize: 18, marginBottom: 10, }, });

export default SearchScreen;