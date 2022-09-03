import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { NowPlayingState } from "../../State/NowPlayingState";
const ExploreMovieCard = ({ onPress, movie, indexContent, indexCurrent }) => {
  const { state, contents } = useRecoilValueLoadable(NowPlayingState);
  if (state === "hasError" || state === "loading") return null;
  console.log(indexContent);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.trendingCardImageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={[
              indexCurrent ? styles.bigImage : styles.smallImage,
              styles.sharedStyle,
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ExploreMovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 13,
    backgroundColor: "white",
  },
  trendingCardImageContainer: {},
  bigImage: {
    resizeMode: "stretch",
    width: 240,
    height: 370,
    borderRadius: 16,
  },
  smallImage: {
    borderRadius: 16,
    resizeMode: "stretch",
    width: 80,
    height: 110,
  },
  sharedStyle: {},
});
