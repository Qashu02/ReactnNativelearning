import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

function Card({ title, imageUrl, subTitle, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image
          style={styles.img}
          source={{ uri: imageUrl }}  // Default image
        />
        <View style={styles.cardInfo}>
          <Text style={styles.heading}>{title}</Text>
          <Text style={{ color: 'purple' }}>{subTitle}</Text>  {/* Use subTitle */}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'F0F0D7',
  },
  card: {
    height: 210,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: 'white',
    marginBottom: 0,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 30,
  },
  img: {
    width: '100%',
    height: 150,  // Set a fixed height for images
    resizeMode: 'cover',  // Make sure the image is properly scaled
  },
  cardInfo: {
    paddingLeft: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default Card;
