import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GenreCard from "../Components/Card/GenreCard";
import { useQuery } from "@tanstack/react-query";

const GenreAPI = () => {
  const { isLoading, error, data } = useQuery(["genreAPI"], () =>
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
    ).then((res) => res.json())
  );
  if (error || isLoading) return null;

  return (
    <View>
      <FlatList
        data={data.genres}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <GenreCard genre={item} />;
        }}
      />
    </View>
  );
};

export default GenreAPI;

const styles = StyleSheet.create({});
