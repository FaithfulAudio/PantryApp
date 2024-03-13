import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';

const EmptyListMessage = ({message}: {message: string}) => {
  return (
    <Card>
      <View style={styles.emptyContainer}>
        <Image
          source={{
            uri: 'https://my-pantry-app.s3.us-west-2.amazonaws.com/EmptyContainer.png',
          }}
          style={styles.emptyImage}
        />
        <Text style={styles.emptyText}>{message}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    padding: 20,
  },
});

export default EmptyListMessage;
