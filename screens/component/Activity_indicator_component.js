import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Activity_indicator_component = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi proses async (misalnya, pengambilan data dari API)
    const fetchData = async () => {
      try {
        // Proses pengambilan data atau tugas async lainnya
        // ...

        // Setelah selesai, atur loading menjadi false
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    // Panggil fungsi fetchData
    fetchData();
  }, []); // Efek hanya dijalankan saat komponen dipasang

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" />
      ) : (
        <Text style={styles.text}>Data Loaded Successfully!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default Activity_indicator_component;