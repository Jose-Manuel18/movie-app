import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GenreCard = ({genre}) => {
  return (
    <View>
      <Text style={styles.text}>{genre.name}</Text>
    </View>
  )
}

export default GenreCard

const styles = StyleSheet.create({
  text:{
    color:"white",
  }
})