import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CarouselParamList } from '../Carousel/Types/types'
export const SeeAllButton = ({ onPress }: CarouselParamList) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>See All</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: 'normal',
  },
})
