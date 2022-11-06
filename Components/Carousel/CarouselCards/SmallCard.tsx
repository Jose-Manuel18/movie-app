import React from 'react'
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
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TextContainer>
                <Text>{movie.title || movie.name}</Text>
            </TextContainer>
        </View>
    )
}

const View = styled.View`
    flex: 1;
    padding: 20px 0px 0px 0px;
`
const TouchableOpacity = styled.TouchableOpacity`
    padding: 0px 8px;
    padding-bottom: 10px;
    width: 100px;
    height: 130px;
`
const Image = styled.Image`
    flex: 1;
    width: '100%';
    height: '100%';
    border-radius: 12px;
`
const Text = styled.Text`
    flex: 1;
    padding-top: 8px;
    color: white;
    text-align: center;
`
const TextContainer = styled.View`
    flex: 1;
    width: 110px;
`

