import React from 'react'
import { CarouselParamList } from '../Carousel/Types/types'
import styled from 'styled-components/native'
export const SeeAllButton = ({ onPress }: CarouselParamList) => {
  return (
    <View onPress={onPress}>
      <Text>See All</Text>
    </View>
  )
}

const View = styled.TouchableOpacity``
const Text = styled.Text`
  color: white;
  font-size: 13px;
  font-weight: bold;
`

