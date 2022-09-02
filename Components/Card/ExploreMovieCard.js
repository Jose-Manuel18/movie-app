import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { NowPlayingState } from "../../State/NowPlayingState";
const ExploreMovieCard = ({ onPress, movie, index }) => {
  const { state, contents } = useRecoilValueLoadable(NowPlayingState);

  if (state === "hasError" || state === "loading") return null;

  console.log(index);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.trendingCardImageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={[index ? styles.bigImage : styles.trendingCardImage]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ExploreMovieCard;

const styles = StyleSheet.create({
  container: {},
  trendingCardImageContainer: {},
  bigImage: {
    width: 200,
    height: 200,
  },
  trendingCardImage: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    resizeMode: "stretch",
    width: 80,
    height: 110,
  },
});
