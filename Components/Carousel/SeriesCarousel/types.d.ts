import { GestureResponderEvent } from "react-native";

interface movieData {
  genre_ids: number[];
  id: number;
  title: string;
  name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  movie_db_id: number;
}
export interface seriesCardProps {
  movie: movieData;
  onPress?(event: GestureResponderEvent): void;
}
export interface GenreProps {
  id: number;
  name: string;
}
