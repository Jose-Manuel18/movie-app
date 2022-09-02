import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
const ExploreMovieCard = ({ onPress, movie }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.trendingCardImageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.trendingCardImage}
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
  trendingCardImage: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    resizeMode: "stretch",
    width: 80,
    height: 110,
  },
});
