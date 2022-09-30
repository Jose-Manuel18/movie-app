import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../../Components/Utils/Colors'
import { useRecoilValueLoadable } from 'recoil'
import { UpComingState } from '../../State/UpComingMovieState'
import SeeAllCard from '../../Components/Card/SeeAllCard'
import { useNavigation } from '@react-navigation/native'
const SeeAllUpcoming = () => {
  const { navigate } = useNavigation()
  const { state, contents } = useRecoilValueLoadable(UpComingState)
  if (state === 'hasError' || state === 'loading') return null
  return (
    <View style={styles.container}>
      <FlatList
        data={contents.results}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <SeeAllCard
              movie={item}
              onPress={() => {
                navigate('DetailScreen', { movieDetails: item })
              }}
            />
          )
        }}
      />
    </View>
  )
}

export default SeeAllUpcoming

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
    paddingTop: 50,
    paddingHorizontal: 18,
  },
})
