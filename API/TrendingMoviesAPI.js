import { StyleSheet, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import TrendingCarousel from "../Components/Carousel/TrendingCarousel/TrendingCarousel";

const TopRatedMoviesAPI = () => {
  const { isLoading, error, data } = useQuery(["topRatedMovies"], () =>
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
    ).then((res) => res.json())
  );

  if (error || isLoading) return null;
  return (
    <View style={styles.container}>
      <TrendingCarousel info={data.results} />
    </View>
  );
};

export default TopRatedMoviesAPI;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
});
