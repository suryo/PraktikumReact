import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const Text_input_component = () => {

    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
  
    const handleInputChange = (text) => {
      setInputValue(text);
    };
  
    const handleSubmit = () => {
      setSubmittedValue(inputValue);
    };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>React Native TextInput Example</Text>

    <TextInput
      style={styles.input}
      placeholder="Type something..."
      onChangeText={handleInputChange}
      value={inputValue}
    />

    <Button title="Submit" onPress={handleSubmit} />

    {submittedValue !== '' && (
      <Text style={styles.submittedText}>
        You submitted: {submittedValue}
      </Text>
    )}
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
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    submittedText: {
      marginTop: 20,
      fontSize: 18,
    },
  });


export default Text_input_component;