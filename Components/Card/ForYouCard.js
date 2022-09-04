import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "../Utils/Colors";
import ReusableText from "../ReusableText";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";
import { TrendingState } from "../../State/TrendingState";

const ForYouCard = ({ movie }) => {
  const { state: genreState, contents: genreContents } =
    useRecoilValueLoadable(GenreState);
  const { state: trendingState, contents: trendingContents } =
    useRecoilValueLoadable(TrendingState);

  if (genreState === "hasError " || genreState === "loading") return null;
  if (trendingState === "hasError " || trendingState === "loading") return null;
  const results = trendingContents.results;
  console.log(trendingContents);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: Colors.TextColor }}>For You</Text>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${results.poster_path}`,
        }}
        style={styles.cardImage}
      />
      <ReusableText>{results.title || results.name}</ReusableText>
      <ReusableText>{genreContents.name}</ReusableText>
    </View>
  );
};

export default ForYouCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LightPurple,
    borderRadius: 16,
  },
  text: {
    color: Colors.TextColor,
  },
  cardImage: {
    width: 150,
    height: 220,
    marginTop: 25,
    borderRadius: 16,
  },
});
