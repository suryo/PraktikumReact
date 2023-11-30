// CameraScreen.js
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const CameraScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const openCamera = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (response) => {
      if (response.uri) {
        setImageUri(response.uri);
      }
    });
  };

  const saveToGallery = () => {
    // Implement saving to gallery logic here
    // You may use a third-party library or React Native CameraRoll API
  };

  return (
    <View style={styles.container}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button title="Open Camera" onPress={openCamera} />
      {imageUri && <Button title="Save to Gallery" onPress={saveToGallery} />}
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
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default CameraScreen;
