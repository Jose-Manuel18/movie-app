import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Components/Utils/Colors'
export const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AccountScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
  },
})
