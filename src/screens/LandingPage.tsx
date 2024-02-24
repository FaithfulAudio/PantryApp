import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function LandingPage() {
  return (
    <ImageBackground
      source={require('../assets/kitchen-background.jpeg')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Kitchen/Pantry App!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)', // Adds a slight dark overlay to the image for better text readability
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  text: {
    fontSize: 24,
    color: '#fff', // White text for contrast against the darker background
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LandingPage;
