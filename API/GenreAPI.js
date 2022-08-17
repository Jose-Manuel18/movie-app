import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import SearchAPI from "./SearchAPI";

const GenreAPI = () => {
  const { isLoading, error, data } = useQuery(["genreAPI"], () =>
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
    ).then((res) => res.json())
  );
  if (error || isLoading) return null;
  // console.log(data)
  return (

    <View>
      {/* <SearchAPI genre={data.genres}/> */}
    </View>
  );
};

export default GenreAPI;

const styles = StyleSheet.create({});
