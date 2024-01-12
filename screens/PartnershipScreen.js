import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

const PartnershipScreen = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const addNumbers = () => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);
    const sum = num1 + num2;
    setResult(sum.toString());
  };

  const subtractNumbers = () => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);
    const diff = num1 - num2;
    setResult(diff.toString());
  };

  return (
    <View style={styles.container}>
      <Text>
            Shop
      </Text>
    
      <View style={styles.buttonsContainer}>
        <Button title="Tambah" onPress={addNumbers} />
        <Button title="Kurang" onPress={subtractNumbers} />
      </View>
      <Text style={styles.result}>Hasil: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 10,
  },
  result: {fontSize: 24},
});

export default PartnershipScreen;
