import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CarouselImages from "../Components/Carousel/TopCarousel/CarouselImages";

const MoviesAPI = () => {
  const { isLoading, error, data } = useQuery(["popularMovies"], () =>
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
    ).then((res) => res.json())
  );

  if (error || isLoading) return null;


  return (
    <View>
      <CarouselImages info={data.results} />
      
    </View>
  );
};

export default MoviesAPI;

const styles = StyleSheet.create({});
