import { View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { CarouselImages } from "../Components/Carousel/Index";
const MoviesAPI = () => {
  const { isLoading, error, data } = useQuery(["popularMovies"], () =>
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DB_KEY}&languages=en-US`,
    ).then((res) => res.json()),
  );

  if (error || isLoading) return null;

  return (
    <View>
      <CarouselImages info={data.results} />
    </View>
  );
};

export default MoviesAPI;
