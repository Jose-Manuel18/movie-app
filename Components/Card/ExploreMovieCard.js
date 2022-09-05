import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { NowPlayingState } from "../../State/NowPlayingState";
const ExploreMovieCard = ({ onPress, movie }) => {
  const { state, contents } = useRecoilValueLoadable(NowPlayingState);
  if (state === "hasError" || state === "loading") return null;

  return <View style={styles.container}></View>;
};

export default ExploreMovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 13,
  },
  trendingCardImageContainer: {},
  bigImage: {
    resizeMode: "stretch",
    width: 200,
    height: 300,
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
