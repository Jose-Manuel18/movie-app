import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const SeriesCard = ({ onPressFunction, movie }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressFunction}>
        <View style={styles.trendingCardImageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.trendingCardImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{movie.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SeriesCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  trendingCardImageContainer: {
    // backgroundColor: "white",
    paddingHorizontal: 8,
  },
  trendingCardImage: {
    borderRadius: 16,
    maxHeight: "100%",
    maxWidth: "100%",
    width: 100,
    height: 100,
  },
  textContainer: {
    maxWidth: 100,
    flexDirection: "column",
  },
  text: {
    paddingTop: 8,
    color: "white",
    textAlign: "center",
  },
});
