interface movieData {
  genre_ids: number[]
  id: number
  title: string
  name: string
  overview: string
  poster_path: string
  vote_average: number
}
export interface seriesCardProps {
  movie: movieData
  onPress(event: GestureResponderEvent): void
}
