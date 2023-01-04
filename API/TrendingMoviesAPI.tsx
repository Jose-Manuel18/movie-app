import { View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { TrendingCarousel } from "../Components/Carousel/Index";
const TopRatedMoviesAPI = () => {
  const { isLoading, error, data } = useQuery(["topRatedMovies"], () =>
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_DB_KEY}&languages=en-US`,
    ).then((res) => res.json()),
  );

  if (error || isLoading) return null;
  return (
    <View>
      <TrendingCarousel info={data.results} />
    </View>
  );
};

export default TopRatedMoviesAPI;
