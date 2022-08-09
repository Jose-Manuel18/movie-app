import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const TrendingCard = ({ movie, onPressFunction }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressFunction}>
        <View>
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
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  trendingCardImageContainer: {
    paddingHorizontal: 8,
    paddingBottom: 10,
  },
  trendingCardImage: {
    borderRadius: 16,
    maxHeight: "100%",
    maxWidth: "100%",
    width: 100,
    height: 100,
  },
  textContainer: {
    maxHeight: 150,
    maxWidth: 100,
    flexDirection: "column",
  },
  text: {
    paddingTop: 8,
    color: "white",
    textAlign: "center",
  },
});
