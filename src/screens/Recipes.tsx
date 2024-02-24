// RecipesScreen.tsx
import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

function RecipesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      {/* Placeholder for recipes list */}
      <Text style={styles.description}>
        List of recipes will be displayed here.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
  },
});

export default RecipesScreen;
