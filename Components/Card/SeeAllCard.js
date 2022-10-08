import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SeeAllCard = ({ movie, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
        <View style={styles.trendingCardImageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.trendingCardImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{movie.title || movie.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SeeAllCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingBottom: 22,
  },
  touchableOpacity: {
    // backgroundColor: "white",
    alignItems: 'center',
  },
  trendingCardImageContainer: {
    // paddingHorizontal: 8,
  },
  trendingCardImage: {
    borderRadius: 16,
    resizeMode: 'stretch',
    width: 110,
    height: 155,
  },
  textContainer: {
    maxWidth: 100,
    flexDirection: 'column',
  },
  text: {
    textAlign: 'center',
    paddingTop: 8,
    color: 'white',
  },
})
