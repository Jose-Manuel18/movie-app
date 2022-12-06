import { FlatList } from 'react-native'
import { SmallCard } from '../CarouselCards/SmallCard'
import { useNavigation } from '@react-navigation/native'
import { take } from 'lodash'
import { movieTypes } from '../Types/types'
import styled from 'styled-components/native'
export function TrendingCarousel({ info }: { info: movieTypes }) {
  const { navigate } = useNavigation()

  return (
    <View onTouchMove={(e) => e.stopPropagation()}>
      <FlatList
        data={take(info, 10)}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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

const View = styled.View``

