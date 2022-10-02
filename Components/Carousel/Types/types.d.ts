import React from 'react'

export interface CarouselParamList {
  length?: number
  movie: movieTypes
  onPress?(event: GestureResponderEvent): void
  size?: number
  item?: movieTypes
}
export interface CarouselPropertiesList {
  info?: movieTypes
  item?: movieTypes
}
export interface movieTypes {
  genre_ids: number[]
  id: number
  title: string
  name: string
  overview: string
  poster_path: string
  vote_average: number
}