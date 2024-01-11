import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';

const Status_bar_component = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      <Text style={styles.text}>Hello, React Native!</Text>
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

export default Status_bar_component;