import React from 'react'
import { Dimensions } from 'react-native'
import { SmallCardProps } from '../Types/types'
import styled from 'styled-components/native'
export const SmallCard = ({ movie, onPress }: SmallCardProps) => {
    const Window = Dimensions.get('window')
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Image
                    height={Window.height}
                    width={Window.width}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    }}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
            <TextContainer>
                <Text>{movie.title || movie.name}</Text>
            </TextContainer>
        </View>
    )
}

const Image = styled.Image`
    flex: 1;
    width: 100px;
    height: 100px;
    border-radius: 24px;
`
const TouchableOpacity = styled.TouchableOpacity`
    width: 100px;
    height: 130px;
    padding: 0px 8px;
`
const View = styled.View`
    flex: 1;
    padding: 20px 0px 0px 0px;
`

const Text = styled.Text`
    flex: 1;
    padding-top: 8px;
    color: white;
    text-align: center;
    font-size: 12px;
`
const TextContainer = styled.View`
    flex: 1;
    width: 110px;
    padding-left: 4px;
`

