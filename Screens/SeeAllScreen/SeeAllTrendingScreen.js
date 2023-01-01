import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { Colors } from '../../Components/Utils/Colors'
import { TrendingState } from '../../State/TrendingState'
import { useRecoilValueLoadable } from 'recoil'
import SeeAllCard from '../../Components/Card/SeeAllCard'
import { useNavigation } from '@react-navigation/native'
import { Loading } from '../../Components/Loading'

const SeeAllTrendingScreen = () => {
  const { navigate } = useNavigation()
  const { state, contents } = useRecoilValueLoadable(TrendingState)
  if (state === 'hasError') return null
  if (state === 'loading') return <Loading />
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  )
}

export default SeeAllTrendingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
    paddingHorizontal: 18,
  },
})

