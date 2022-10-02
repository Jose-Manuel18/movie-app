import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  GestureResponderEvent,
} from 'react-native'
import React, { useState } from 'react'
import IconButton from '../../Components/IconButton'
import { isLiked, likedState } from '../../Atom/isLiked'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { TouchableOpacity } from 'react-native'
import { CarouselParamList } from '../../Components/Carousel/Types/types'
import { Colors } from '../../Components/Utils/Colors'
import { movieTypes } from '../../Components/Carousel/Types/types'
const DetailsCard = ({ movie, size, onPress }: CarouselParamList) => {
  const setIsLiked = useSetRecoilState(isLiked)
  const buttonHandler = useRecoilValue(likedState)
  const [deleteLike, setDeleteLike] = useRecoilState<movieTypes>(isLiked)
  const index = deleteLike.findIndex((listItem) => listItem === movie)

  const removeItemAtIndex = (arr: string, index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
  }
  const deleteItem = () => {
    const newList = removeItemAtIndex(deleteLike, index)
    setDeleteLike(newList)
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={{ width: 50 }}></View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{movie.title || movie.name}</Text>
          <Text style={styles.overviewText}>{movie.overview}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            index >= 0
              ? deleteItem()
              : setIsLiked((movies) => [...movies, movie])
          }}
          style={styles.buttonContainer}
        >
          <IconButton
            icon={index >= 0 ? 'heart' : 'heart-outline'}
            color='#8e55ac'
            size={24}
            disabled
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DetailsCard
const { width } = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: width,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: { flex: 1 },
  cardImage: {
    resizeMode: 'stretch',
    width: 140,
    height: 200,
    borderRadius: 16,
  },
  textContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  overviewText: {
    fontSize: 13,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  buttonContainer: {
    width: 25,
    height: 25,
    // backgroundColor: "#ffffff",
  },
  deleteButton: {
    backgroundColor: 'white',
  },
})
