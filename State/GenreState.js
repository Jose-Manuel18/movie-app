import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { selector } from "recoil";

export const GenreState = selector({
  key: "GenreState", // unique ID (with respect to other atoms/selectors)
  get: async () => {
    return await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
    ).then((res) => res.json());
  },
});

const styles = StyleSheet.create({});
