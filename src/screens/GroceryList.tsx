import React, {useEffect, useState, useMemo} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {PANTRY_HASH, PantryItem} from '../spiceData/recommendedPantryItems';
import usePantryStore from '../stores/pantry.store';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import EmptyListMessage from '../components/EmptyListMessage';

function GroceryList() {
  const [searchQuery, setSearchQuery] = useState('');
  const {removeItemFromGroceryList, groceryList, moveGroceryItemToPantry} =
    usePantryStore();
  const [filteredItems, setFilteredItems] = useState(
    groceryList.map(id => PANTRY_HASH[id]),
  );

  useEffect(() => {
    setFilteredItems(groceryList.map(id => PANTRY_HASH[id]));
  }, [groceryList]);

  const debouncedSearch = useMemo(
    () =>
      _.debounce(query => {
        const lowerCaseQuery = query.toLowerCase();
        const filtItems = groceryList
          .map(id => PANTRY_HASH[id])
          .filter(
            item =>
              item.title.toLowerCase().includes(lowerCaseQuery) ||
              item.description.toLowerCase().includes(lowerCaseQuery),
          );
        setFilteredItems(filtItems);
      }, 250),
    [groceryList],
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredItems(groceryList.map(id => PANTRY_HASH[id]));
    debouncedSearch.cancel();
  };

  const removeItem = (id: number) => {
    removeItemFromGroceryList(id);
    setFilteredItems(currentItems =>
      currentItems.filter(item => item.id !== id),
    );
  };

  const leftComponent = (imageUrl: string | undefined) =>
    imageUrl ? (
      <Image source={{uri: imageUrl}} style={styles.leftIcon} />
    ) : null;

  const renderItem = ({item}: {item: PantryItem}) => (
    <View style={styles.cardContainer}>
      <Card style={styles.cardStyle}>
        <View style={styles.flexDirectionRow}>
          <Card.Title
            title={item.title}
            left={() => leftComponent(item.imageUrl)}
            style={styles.cardTitle}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => moveGroceryItemToPantry(item.id)}
              style={styles.actionIcon}>
              <Icon name="basket-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => removeItem(item.id)}
            style={styles.trashIcon}>
            <Icon name="trash-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <Card.Content>
          <Text style={styles.description}>{item.description}</Text>
        </Card.Content>
      </Card>
    </View>
  );

  const keyExtractor = (item: PantryItem) => item.id.toString();

  return (
    <ImageBackground
      source={require('../assets/MyPantry.jpeg')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={'#000'}
          onChangeText={handleSearch}
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
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.container}
        ListEmptyComponent={
          <EmptyListMessage message="There's nothing here yet! Let's add something to your grocery list." />
        }
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  flexDirectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  actionIcon: {
    marginRight: 0,
  },
  cardTitle: {
    width: '75%',
  },
  trashIcon: {
    marginLeft: 'auto',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    paddingTop: 50,
  },
  trash: {
    position: 'absolute',
    right: 30,
    top: 20,
  },
  leftIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
  leftSwipeContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    height: '100%',
  },
  leftSwipeText: {
    color: 'black',
    fontWeight: '600',
  },
  clearButton: {
    paddingHorizontal: 10,
    position: 'absolute',
    right: 30,
    top: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
  },
  clearButtonText: {
    fontSize: 20,
    color: 'black',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  headerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  description: {
    fontSize: 16,
  },
  swipeableContainer: {
    flex: 1,
  },
});

export default GroceryList;
