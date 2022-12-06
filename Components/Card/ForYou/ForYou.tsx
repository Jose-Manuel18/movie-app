import { FlatList, View } from 'react-native'
import React from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { GenreState } from '../../../State/GenreState'
import { TrendingState } from '../../../State/TrendingState'
import ForYouCard from './ForYouCard'
import { Colors } from '../../Utils/Colors'
import { take } from 'lodash'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import { Block } from '../../Block'
const ForYou = () => {
  const { state: genreState, contents: genreContents } =
    useRecoilValueLoadable(GenreState)
  const { state, contents } = useRecoilValueLoadable(TrendingState)
  const { navigate } = useNavigation()
  if (genreState === 'hasError ' || genreState === 'loading') return null
  if (state === 'hasError ' || state === 'loading') return null

  return (
    <Container>
      <Text>For You</Text>
      <Block size={24} />
      <FlatList
        scrollEnabled={false}
        data={take(contents.results, 10)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ padding: 8 }} />}
        renderItem={({ item }) => {
          return (
            <ForYouCard
              onPress={() => {
                navigate('DetailScreen', { movieDetails: item })
              }}
              movie={item}
            />
          )
        }}
      />
    </Container>
  )
}

export default ForYou

const Container = styled.View`
  flex: 1;
  padding: 16px;
`
const Text = styled.Text`
  color: ${Colors.TextColor};
  font-size: 20;
  font-weight: bold;
`

