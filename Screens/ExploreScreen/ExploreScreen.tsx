import { StyleSheet, View, FlatList, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../Components/Utils/Colors'
import SearchButton from '../../Components/SearchBarButton/SearchButton'
import { useRecoilValueLoadable } from 'recoil'
import { GenreState } from '../../State/GenreState'
import FilterTextCard from '../../Components/Card/FilterTextCard'
import { NowPlayingState } from '../../State/NowPlayingState'
import ForYou from '../../Components/Card/ForYou/ForYou'
import ExploreImages from './ExploreImages'
import { take } from 'lodash'
import { selectedState } from './type'
const ExploreScreen = () => {
  const [selected, setSelected] = useState<selectedState | null>(null)
  const { state, contents } = useRecoilValueLoadable(NowPlayingState)
  const { state: genreState, contents: genreContents } =
    useRecoilValueLoadable(GenreState)

  const currentMovie = contents?.results?.filter(
    (movies: { genre_ids: (selectedState | null)[] }) =>
      movies?.genre_ids.includes(selected)
  )

  if (state === 'hasError' || state === 'loading') return null
  if (genreState === 'hasError' || genreState === 'loading') return null
  console.log(`selected ${selected}`)
  console.log(currentMovie[0])

  return (
    <ScrollView style={styles.container}>
      <SearchButton />
      <View style={styles.filterContainer}>
        <FlatList
          data={genreContents.genres}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <FilterTextCard
                genre={item}
                isSelected={selected === item.id}
                onPress={() =>
                  item.id === selected
                    ? setSelected(null)
                    : setSelected(item.id)
                }
              />
            )
          }}
        />

        <FlatList
          data={
            selected === null
              ? take(contents.results, 3)
              : take(currentMovie, 3)
          }
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return <ExploreImages index={index} item={item} />
          }}
        />
        {selected !== null && currentMovie.length === 0 ? (
          <Text>Nothing to see here</Text>
        ) : null}
      </View>
      <ForYou />
      <View style={{ height: 30 }} />
    </ScrollView>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
    paddingTop: 60,
  },
  filterContainer: {
    paddingHorizontal: 8,
  },
})
