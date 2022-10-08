import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CarouselParamList } from '../Types/types'
export const BigCard = ({ movie, onPress }: CarouselParamList) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.cardImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    paddingHorizontal: 8,
  },
  cardImage: {
    resizeMode: 'stretch',
    width: 175,
    height: 250,
    borderRadius: 16,
  },
})
