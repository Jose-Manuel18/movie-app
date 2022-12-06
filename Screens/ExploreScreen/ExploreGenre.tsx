import { View, FlatList } from 'react-native'
import React from 'react'
import FilterTextCard from '../../Components/Card/FilteredText/FilterTextCard'
import { selectedProps } from './type'
export const ExploreGenre = ({
  genreContents,
  selected,
  setSelected,
}: selectedProps) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <FlatList
        data={genreContents}
        keyExtractor={(item) => item.id}
        nestedScrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FilterTextCard
            genre={item}
            isSelected={selected === item.id}
            onPress={() =>
              item.id === selected ? setSelected(null) : setSelected(item.id)
            }
          />
        )}
      />
    </View>
  )
}

