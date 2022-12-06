import React from 'react'
import { Dimensions } from 'react-native'
import { SmallCardProps } from '../Types/types'
import styled from 'styled-components/native'
export const SmallCard = ({ movie, onPress }: SmallCardProps) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    }}
                />
            </TouchableOpacity>
            <Spacer padding={4} />
            <TextContainer>
                <Text>{movie.title || movie.name}</Text>
            </TextContainer>
        </View>
    )
}

const View = styled.View`
    flex: 1;
`
const TouchableOpacity = styled.TouchableOpacity`
    flex: 1;
    padding: 0px 8px;
    width: 100px;
    height: 120px;
`
const Image = styled.Image`
    flex: 1;
    border-radius: 8px;
`

const TextContainer = styled.View`
    flex: 1;
    width: 100px;
`
const Text = styled.Text`
    flex: 1;
    color: white;
    text-align: center;
    font-size: 11px;
`
const Spacer = styled.View<{ padding: number }>`
    padding: ${(props) => props.padding}px;
`

