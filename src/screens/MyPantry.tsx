import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {PANTRY_HASH, imageMap} from '../spiceData/recommendedPantryItems';
import usePantryStore from '../stores/pantry.store';
import Icon from 'react-native-vector-icons/Ionicons';

function PantryItems() {
  const [searchQuery, setSearchQuery] = useState('');
  const {removeItemFromPantry, myPantryList} = usePantryStore();
  const [filteredItems, setFilteredItems] = useState(
    myPantryList.map(id => PANTRY_HASH[id]),
  );
  const swipeableRef = useRef(null) as any;

  useEffect(() => {
    const pantryItemsInMyPantry = myPantryList.map(id => PANTRY_HASH[id]);
    setFilteredItems(pantryItemsInMyPantry);
  }, [myPantryList]);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setSearchQuery(lowerCaseQuery);
    const filteredItems = myPantryList
      .map(id => PANTRY_HASH[id])
      .filter(
        item =>
          item.title.toLowerCase().includes(lowerCaseQuery) ||
          item.description.toLowerCase().includes(lowerCaseQuery),
      );
    setFilteredItems(filteredItems);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredItems(myPantryList.map(id => PANTRY_HASH[id]));
  };

  useEffect(() => {
    if (swipeableRef?.current) {
      swipeableRef.current.close();
    }
  }, [swipeableRef]);

  const removeItem = async (id: number) => {
    removeItemFromPantry(id);
    setFilteredItems(filteredItems.filter(item => item.id !== id));
  };

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
      <ScrollView contentContainerStyle={styles.container}>
        {filteredItems.map(item => (
          <View>
            <Card style={styles.cardStyle}>
              <Card.Title
                title={item.title}
                left={() =>
                  item.id ? (
                    <Image source={imageMap[item.id]} style={styles.leftIcon} />
                  ) : null
                }
              />
              <Card.Content>
                <Text style={styles.description}>{item.description}</Text>
              </Card.Content>
            </Card>
            <Icon
              name="trash"
              size={30}
              color="black"
              style={styles.trash}
              onPress={() => removeItem(item.id)}
            />
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
    width: '90%',
    height: 200,
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
    flex: 1, // Ensure Swipeable takes up full height
  },
});

export default PantryItems;
