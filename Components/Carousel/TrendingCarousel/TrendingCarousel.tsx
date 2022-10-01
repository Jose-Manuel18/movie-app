import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import TrendingCard from '../Cards/TrendingCard'
import { useNavigation } from '@react-navigation/native'
import { take } from 'lodash'

function TrendingCarousel({ info }: { info: object }) {
  const { navigate } = useNavigation()

  return (
    <>
      <FlatList
        data={take(info, 10)}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TrendingCard
              onPress={() => {
                navigate('DetailScreen', {
                  movieDetails: item,
                })
              }}
              movie={item}
            />
          )
        }}
      />
    </>
  )
}

export default TrendingCarousel

const styles = StyleSheet.create({})
