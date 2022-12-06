import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { movieTypes } from '../../Components/Carousel/Types/types'

interface sideImagesProps {
  movies: movieTypes[]
}
export const SideImages = ({ movies }: sideImagesProps) => {
  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SmallImage
            resizeMode="stretch"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
          />
        )}
      />
    </View>
  )
}
const View = styled.View`
  padding-left: 20px;
  padding-top: 20px;
  background-color: white;
  justify-content: flex-start;
`

const SmallImage = styled.Image`
  height: 50px;
  width: 50px;
`

