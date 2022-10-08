import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SmallCardProps } from '../Types/types'
export const SmallCard = ({ movie, onPress }: SmallCardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={styles.trendingCardImageContainer}>
            <Image
              resizeMethod='auto'
              resizeMode='contain'
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
              style={styles.fitImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{movie.title || movie.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  trendingCardImageContainer: {
    paddingHorizontal: 8,
    paddingBottom: 10,
  },
  fitImage: {
    borderRadius: 16,
    width: 100,
    height: 100,
  },
  textContainer: {
    maxHeight: 150,
    maxWidth: 100,
    flexDirection: 'column',

    paddingLeft: 16,
  },
  text: {
    paddingTop: 8,
    color: 'white',
    textAlign: 'center',
  },
})
