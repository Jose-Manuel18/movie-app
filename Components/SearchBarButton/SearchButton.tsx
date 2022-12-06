import { Colors } from '../Utils/Colors'
import { useNavigation } from '@react-navigation/native'
import IconButton from '../IconButton'
import styled from 'styled-components/native'
const SearchButton = () => {
  const { navigate } = useNavigation()

  return (
    <View>
      <SearchContainer onPress={() => navigate('SearchScreen')}>
        <Text>Search</Text>
        <Spacer />
        <IconButton
          icon="ios-search-sharp"
          color={Colors.TextColor}
          size={16}
        />
      </SearchContainer>
      <Block gap={16} />
      <FilterContainer>
        <IconButton icon="filter-sharp" color={Colors.TextColor} size={24} />
      </FilterContainer>
    </View>
  )
}

export default SearchButton
const View = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0px 20px;
`
const Text = styled.Text`
  color: white;
  font-size: 12px;
`
const SearchContainer = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  background-color: ${Colors.LightPurple};
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
`
const FilterContainer = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: ${Colors.LightPurple};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`
const Block = styled.View<{ gap: number }>`
  padding-right: ${(props) => props.gap}px;
`
const Spacer = styled.View`
  flex: 1;
`

