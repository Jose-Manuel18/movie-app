import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { ExploreImageParam } from './type'
const ExploreImages = ({ item, index }: ExploreImageParam) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }}
        style={[index === 0 ? styles.BigImage : styles.smallImage]}
      />
    </View>
  )
}

export default ExploreImages

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  BigImage: {
    resizeMode: 'stretch',
    width: 200,
    height: 300,
    borderRadius: 16,
    flexDirection: 'row',
  },
  smallImage: {
    borderRadius: 16,
    resizeMode: 'stretch',
    width: 80,
    height: 110,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
})
