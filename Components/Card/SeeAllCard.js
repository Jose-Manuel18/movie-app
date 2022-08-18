import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SeeAllCard = ({ movie, onPressFunction }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={onPressFunction}>
        <View style={styles.trendingCardImageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.trendingCardImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{movie.title || movie.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SeeAllCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  touchableOpacity:{
    alignItems: "center",
  },
  trendingCardImageContainer: {
    paddingHorizontal: 8,
    justifyContent: "center",
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
    textAlign: "center",
    paddingTop: 8,
    color: "white",
  },
});
