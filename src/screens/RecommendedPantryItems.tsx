import React, {useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {PantryItem, pantry_items} from '../spiceData/recommendedPantryItems';
import usePantryStore from '../stores/pantry.store';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

function PantryItems() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(pantry_items);
  const {
    togglePantryItem,
    isItemInPantry,
    toggleGroceryItem,
    isItemInGroceryList,
  } = usePantryStore();

  useEffect(() => {
    const sortedItems = [...pantry_items].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setFilteredItems(sortedItems);
  }, []);

  const debouncedSearch = useMemo(
    () =>
      _.debounce(query => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = pantry_items.filter(
          item =>
            item.title.toLowerCase().includes(lowerCaseQuery) ||
            item.description.toLowerCase().includes(lowerCaseQuery),
        );
        const sortedFilteredItems = filtered.sort((a, b) =>
          a.title.localeCompare(b.title),
        );
        setFilteredItems(sortedFilteredItems);
      }, 300),
    [],
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    const sortedItems = [...pantry_items].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setFilteredItems(sortedItems);
    debouncedSearch.cancel();
  };

  const getFirstLetter = (title: string) => title.charAt(0).toUpperCase();

  const leftComponent = (imageUrl: string | undefined) =>
    imageUrl ? (
      <Image source={{uri: imageUrl}} style={styles.leftIcon} />
    ) : null;

  const renderItem = ({item, index}: {item: PantryItem; index: number}) => (
    <View>
      {index === 0 ||
      getFirstLetter(filteredItems[index - 1].title) !==
        getFirstLetter(item.title) ? (
        <View style={styles.headerContainer}>
          <View style={styles.headerCircle}>
            <Text style={styles.headerText}>{getFirstLetter(item.title)}</Text>
          </View>
        </View>
      ) : null}
      <View style={styles.cardContainer}>
        <Card style={styles.cardStyle}>
          <View style={styles.flexDirectionRow}>
            <Card.Title
              style={styles.cardTitle}
              title={item.title}
              left={() => leftComponent(item.imageUrl)}
            />
            <TouchableOpacity onPress={() => togglePantryItem(item.id)}>
              <Icon
                name="basket-outline"
                size={30}
                color={isItemInPantry(item.id) ? 'green' : 'grey'}
                style={styles.actionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleGroceryItem(item.id)}>
              <Icon
                name="cart-outline"
                size={30}
                color={isItemInGroceryList(item.id) ? 'brown' : 'grey'}
                style={styles.actionIcon}
              />
            </TouchableOpacity>
          </View>

          <Card.Content>
            <Text style={styles.description}>{item.description}</Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );

  const keyExtractor = (item: PantryItem) => `${item.id}`;

  return (
    <ImageBackground
      source={require('../assets/spices.jpeg')}
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
        keyboardShouldPersistTaps="always"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  actionIcon: {
    marginHorizontal: 5,
  },
  backgroundImage: {
    flex: 1,
    paddingTop: 50,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  cardTitle: {
    width: '75%',
  },
  leftIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  banner: {
    backgroundColor: 'blue',
    height: 30,
    borderRadius: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bannerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
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
  selectedCard: {
    borderColor: '#3498db',
    borderWidth: 2,
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
});

export default PantryItems;
