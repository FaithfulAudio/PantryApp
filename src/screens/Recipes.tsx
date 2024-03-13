import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {Recipe, recipes} from '../spiceData/recipes';
import usePantryStore from '../stores/pantry.store';
import _ from 'lodash';
import {PANTRY_HASH} from '../spiceData/recommendedPantryItems';
import RecipeModal from '../components/RecipeModal';

function RecipesScreen() {
  const {isItemInPantry, myPantryList} = usePantryStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleOpenModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedRecipe(null);
  };

  const debouncedSearch = useMemo(
    () =>
      _.debounce(query => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = recipes.filter(recipe =>
          recipe.recipeName.toLowerCase().includes(lowerCaseQuery),
        );
        setFilteredRecipes(filtered);
      }, 300),
    [],
  );

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredRecipes(recipes);
    } else {
      debouncedSearch(searchQuery);
    }
  }, [searchQuery, debouncedSearch]);

  const areAllIngredientsAvailable = (ingredients: number[]) => {
    return ingredients.every(ingredientId => isItemInPantry(ingredientId));
  };

  const truncate = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  const leftComponent = (item: Recipe) =>
    item.id && item.imageUrl ? (
      <Image source={{uri: item.imageUrl}} style={styles.leftIcon} />
    ) : (
      <></>
    );

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const orderByCompleteIngredients = useCallback(
    (a: Recipe, b: Recipe) => {
      const totalIngredientsA = a.ingredients.length;
      const completeA = a.ingredients.filter(id => isItemInPantry(id)).length;
      const totalIngredientsB = b.ingredients.length;
      const completeB = b.ingredients.filter(id => isItemInPantry(id)).length;

      const completionPercentageA = completeA / totalIngredientsA;
      const completionPercentageB = completeB / totalIngredientsB;

      if (completionPercentageA === completionPercentageB) {
        return totalIngredientsA - totalIngredientsB;
      }
      return completionPercentageB - completionPercentageA;
    },
    [isItemInPantry],
  );

  useEffect(() => {
    setFilteredRecipes(prevRecipes => {
      const sorted = prevRecipes.slice().sort(orderByCompleteIngredients);
      return sorted;
    });
  }, [myPantryList, orderByCompleteIngredients]);

  const sortedRecipes = useMemo(() => {
    return filteredRecipes.slice().sort(orderByCompleteIngredients);
  }, [filteredRecipes, orderByCompleteIngredients]);

  const missingIngredient = (ingredients: number[]): string | undefined => {
    let missing: string | undefined;
    const pantryItems = ingredients.filter(id => !isItemInPantry(id));
    if (pantryItems.length === 1) {
      const missingIngredientId = pantryItems[0];
      const mI = Object.values(PANTRY_HASH).find(
        item => item.id === missingIngredientId,
      );
      missing = mI ? mI.title : undefined;
    }
    return missing;
  };

  const renderItem = ({item, index}: {item: Recipe; index: number}) => {
    const isAlmostThere =
      item.ingredients.length > 2 &&
      item.ingredients.filter(id => isItemInPantry(id)).length ===
        item.ingredients.length - 1;
    const missing = missingIngredient(item.ingredients);

    return (
      <Card key={index} style={styles.cardStyle}>
        <Card.Title title={item.recipeName} left={() => leftComponent(item)} />
        {areAllIngredientsAvailable(item.ingredients) && (
          <View style={styles.banner}>
            <Text style={styles.bannerText}>Ready to Make!</Text>
          </View>
        )}
        {isAlmostThere && missing && (
          <View style={[styles.banner, styles.backgroundBlue]}>
            <Text style={styles.bannerText}>
              Almost there! Just missing {missing}
            </Text>
          </View>
        )}
        <Card.Content>
          <Text style={styles.description}>
            {truncate(item.instructions.join(' '), 100)}
          </Text>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity onPress={() => handleOpenModal(item)}>
            <Text>See More</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/kitchen-background.jpeg')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="black"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        {searchQuery !== '' && (
          <TouchableOpacity
            onPress={handleClearSearch}
            style={styles.clearButton}>
            <Text style={styles.clearButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={sortedRecipes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always"
      />
      {selectedRecipe && (
        <RecipeModal
          visible={isModalVisible}
          onClose={closeModal}
          recipe={selectedRecipe as Recipe}
        />
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    marginTop: 0,
  },
  backgroundBlue: {
    backgroundColor: 'blue',
  },
  clearButtonText: {
    fontSize: 20,
    color: 'black',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
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
    paddingTop: 50,
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
    width: '100%',
    height: 'auto',
    alignSelf: 'center',
  },
  leftIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  description: {
    fontSize: 16,
  },
  clearButton: {
    paddingHorizontal: 10,
    position: 'absolute',
    right: 30,
    top: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
  },
});

export default RecipesScreen;
