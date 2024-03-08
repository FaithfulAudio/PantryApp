import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {imageMapRecipes, recipes} from '../spiceData/recipes'; // Assuming the path to your recipes and images data
import usePantryStore from '../stores/pantry.store'; // Assuming you have a pantry store

function RecipesScreen() {
  const {isItemInPantry} = usePantryStore(); // Assuming this function checks if an ingredient is in the pantry

  // Function to check if all ingredients are available
  const areAllIngredientsAvailable = (ingredients: number[]) => {
    return ingredients.every(ingredientId => isItemInPantry(ingredientId));
  };

  // Function to truncate instructions
  const truncate = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  return (
    <ImageBackground
      source={require('../assets/kitchen-background.jpeg')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        {recipes.map((recipe, index) => (
          <Card key={index} style={styles.cardStyle}>
            <Card.Title
              title={recipe.recipeName}
              left={() => (
                <Image
                  source={imageMapRecipes[recipe.id]}
                  style={styles.leftIcon}
                />
              )}
            />
            {areAllIngredientsAvailable(recipe.ingredients) && (
              <View style={styles.banner}>
                <Text style={styles.bannerText}>Ready to Make!</Text>
              </View>
            )}
            <Card.Content>
              {/* Truncate instructions to 100 characters */}
              <Text style={styles.description}>
                {truncate(recipe.instructions.join(' '), 100)}
              </Text>
            </Card.Content>
            <Card.Actions>
              <TouchableOpacity onPress={() => console.log('Open modal')}>
                <Text>See More</Text>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    marginTop: 50,
  },
  banner: {
    backgroundColor: 'green',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: -10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  bannerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  cardStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  description: {
    fontSize: 16,
  },
});

export default RecipesScreen;
