import { StyleSheet } from 'react-native'
import React from 'react'
import { CarouselParamList } from '../Carousel/Types/types'
import styled from 'styled-components/native'
export const SeeAllButton = ({ onPress }: CarouselParamList) => {
    return (
        <View>
            <Text>See All</Text>
        </View>
    )
}

const View = styled.View``
const Text = styled.Text`
    color: white;
    font-size: 13;
    font-weight: bold;
`

