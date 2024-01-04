import React, { useState } from 'react';
import { View, TextInput, Text,Alert, Button, StyleSheet } from 'react-native';

const Button_component = () => {

    const handlePress = () => {
        Alert.alert('Button Pressed', 'Hello, React Native!');
      };

      return (
        <View style={styles.container}>
          <Text style={styles.title}>React Native Button Example</Text>
          <Button title="Press Me" onPress={handlePress} />
        </View>
      );
    };
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        },
      });
      

export default Button_component;