import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Components/Utils/Colors'
import SearchAPI from '../../API/SearchAPI'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchAPI />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
    paddingTop: 60,
  },
})
