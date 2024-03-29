import { FlatList, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { take } from 'lodash'
import { CarouselPropertiesList } from '../Types/types'
import { SmallCard } from '../Index'
export const SeriesCarousel: React.FC<{ info: CarouselPropertiesList }> = ({
  info,
}) => {
  const { navigate } = useNavigation()

  return (
    <View>
      <FlatList
        data={take(info, 10)}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        horizontal={true}
        nestedScrollEnabled={true}
        renderItem={({ item }) => {
          return (
            <SmallCard
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
    </View>
  )
}

