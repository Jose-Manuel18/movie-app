import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import ImagedCardView from "react-native-imaged-card-view";
const ExploreMovieCard = ({ onPress, movie }) => {
  // movie?.forEach((index) => console.log(index));
  for (const index of movie) {
    console.log(index);
  }
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
