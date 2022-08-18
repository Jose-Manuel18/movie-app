import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SeeAllCard = ({ movie, onPressFunction }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressFunction}
        styles={styles.innerContainer}
      >
        <View style={styles.innerContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>{movie.title || movie.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SeeAllCard;

const styles = StyleSheet.create({
  container: {},
  innerContainer: {},
  imageContainer: {},
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "white",
  },
});
