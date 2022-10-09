import { atom } from 'recoil'
import { movieTypes } from '../Components/Carousel/Types/types'
export interface isLikedProps {
  item: movieTypes
  a: boolean
  b: boolean
}
export const isLiked = atom({
  key: 'isLiked',
  default: [] as isLikedProps[],
})
export const likedState = atom({
  key: 'likedState',
  default: false,
})

export const keyboardRef = atom({
  key: 'keyboardRef',
  default: null,
})
