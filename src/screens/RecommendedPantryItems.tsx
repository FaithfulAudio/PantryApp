import React, {useState} from 'react';
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
import {imageMap, pantry_items} from '../spiceData/recommendedPantryItems';
import usePantryStore from '../stores/pantry.store';

function PantryItems() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(pantry_items);
  const {togglePantryItem, isItemInPantry} = usePantryStore();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowerCaseQuery = query.toLowerCase();
    const filtered = pantry_items.filter(
      item =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.description.toLowerCase().includes(lowerCaseQuery),
    );
    setFilteredItems(filtered);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredItems(
      pantry_items.sort((a, b) => a.title.localeCompare(b.title)),
    );
  };

  const renderHeader = (letter: string, index: number) => (
    <View key={index} style={styles.headerContainer}>
      <View style={styles.headerCircle}>
        <Text style={styles.headerText}>{letter}</Text>
      </View>
    </View>
  );

  const getFirstLetter = (title: string) => title.charAt(0).toUpperCase();

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
        {filteredItems.map((item, index) => (
          <View key={index}>
            {index === 0 ||
            getFirstLetter(filteredItems[index - 1].title) !==
              getFirstLetter(item.title)
              ? renderHeader(getFirstLetter(item.title), index)
              : null}
            <TouchableOpacity onPress={() => togglePantryItem(item.id)}>
              <Card
                style={[
                  styles.cardStyle,
                  isItemInPantry(item.id) && styles.selectedCard,
                ]}>
                <Card.Title
                  title={item.title}
                  left={() =>
                    item.id ? (
                      <Image
                        source={imageMap[item.id]}
                        style={styles.leftIcon}
                      />
                    ) : null
                  }
                />
                {isItemInPantry(item.id) && (
                  <View style={styles.banner}>
                    <Text style={styles.bannerText}>In Pantry</Text>
                  </View>
                )}
                <Card.Content>
                  <Text style={styles.description}>{item.description}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
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
  leftIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  banner: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: -10,
    marginBottom: 10,
    width: '30%',
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
    width: '90%',
    height: 200,
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
