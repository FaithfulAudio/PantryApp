// RecommendedPantryItemsScreen.tsx
import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

function RecommendedPantryItemsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recommended Pantry Items</Text>
      {/* Placeholder for recommended items list */}
      <Text style={styles.description}>
        List of recommended pantry items will be displayed here.
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

export default RecommendedPantryItemsScreen;
