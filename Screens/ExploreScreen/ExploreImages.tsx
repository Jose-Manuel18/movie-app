import React, { useState } from 'react'
import styled from 'styled-components/native'
import { SideImages } from './SideImages'
import { movieTypes } from '../../Components/Carousel/Types/types'
import { FlatList, View } from 'react-native'

interface ExploreImageProps {
  item: movieTypes
  index: number
}
export const ExploreImages = ({ item, index }: ExploreImageProps) => {
  return (
    <Container index={index}>
      <MoviePoster
        index={index}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }}
      />
    </Container>
  )
}

const Container = styled.View<{ index: number }>`
  padding: 0px 16px;
  background-color: white;
  flex-direction: ${(p) => (p.index > 0 ? 'row' : null)};
`
const MoviePoster = styled.Image<{ index: number }>`
  width: ${(props) => (props.index === 0 ? 200 : 80)};
  height: ${(props) => (props.index === 0 ? 300 : 90)};
  border-radius: 16px;
  grid-area: auto;
`
const SmallerPoster = styled.Image<{ index: number }>`
  width: 80px;
  height: 110px;
  flex-direction: column;
`

