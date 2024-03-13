import React from 'react';
import {Modal, View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Recipe} from '../spiceData/recipes';
import {Button} from 'react-native-paper';

const RecipeModal = ({
  visible,
  onClose,
  recipe,
}: {
  visible: boolean;
  onClose: () => void;
  recipe: Recipe;
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalView}>
        <Text style={styles.recipeTitle}>{recipe.recipeName}</Text>
        <Text style={styles.sectionTitle}>Instructions:</Text>
        <ScrollView style={styles.scrollView}>
          {recipe.instructions.map((instruction, index) => (
            <Text key={index} style={styles.instructionText}>
              {`\u2022 ${instruction}`}
            </Text>
          ))}
        </ScrollView>
        <Button onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </Button>
        <Image style={styles.recipeImage} source={{uri: recipe.imageUrl}} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  recipeImage: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollView: {
    marginBottom: 20,
  },
  recipeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    elevation: 2,
    backgroundColor: '#2196F3',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
  },
});

export default RecipeModal;
