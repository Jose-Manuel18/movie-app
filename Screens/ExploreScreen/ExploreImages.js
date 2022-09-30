import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../Components/Utils/Colors'
import { useNavigation } from '@react-navigation/native'

const ExploreImages = ({ currentMovie, contents }) => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity
        onPress={() => {
          navigate('DetailScreen', {
            movieDetails:
              currentMovie.length === 0 ? contents[0] : currentMovie[0],
          })
        }}
      >
        <Image
          style={styles.bigImage}
          source={{
            uri:
              currentMovie.length === 0
                ? `https://image.tmdb.org/t/p/w500${contents[0].poster_path}`
                : `https://image.tmdb.org/t/p/w500${currentMovie[0].poster_path}`,
          }}
        />
      </TouchableOpacity>
      <View style={{ width: 30 }} />
      <View style={styles.smallerImageContainer}>
        <TouchableOpacity
          onPress={() => {
            navigate('DetailScreen', {
              movieDetails:
                currentMovie.length === 0 ? contents[2] : currentMovie[2],
            })
          }}
        >
          <Image
            style={styles.smallerImage}
            source={{
              uri:
                currentMovie.length === 0
                  ? `https://image.tmdb.org/t/p/w500${contents[2].poster_path}`
                  : `https://image.tmdb.org/t/p/w500${currentMovie[2].poster_path}`,
            }}
          />
        </TouchableOpacity>
        <View style={{ height: 8 }} />
        <TouchableOpacity
          onPress={() => {
            navigate('DetailScreen', {
              movieDetails:
                currentMovie.length === 0 ? contents[1] : currentMovie[1],
            })
          }}
        >
          <Image
            style={styles.smallerImage}
            source={{
              uri:
                currentMovie.length === 0
                  ? `https://image.tmdb.org/t/p/w500${contents[1].poster_path}`
                  : `https://image.tmdb.org/t/p/w500${currentMovie[1].poster_path}`,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ExploreImages
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
    paddingTop: 60,
  },
  filterContainer: {
    paddingHorizontal: 8,
  },
  movieText: {
    color: 'white',
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingTop: 14,
  },
  bigImage: {
    resizeMode: 'stretch',
    width: 210,
    height: 350,
    borderRadius: 16,
  },
  smallerImageContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  smallerImage: {
    resizeMode: 'stretch',
    width: 120,
    height: 170,
    borderRadius: 12,
  },
})
