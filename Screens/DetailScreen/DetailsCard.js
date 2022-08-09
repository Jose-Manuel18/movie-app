import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { VStack, HStack, Spacer } from "react-native-stacks";

const DetailsCard = ({ movie }) => {
  return (
    <VStack style={styles.details} spacing={20}>
      <Spacer />
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={styles.cardImage}
      />

      <Text style={styles.titleText}>{movie.title || movie.name}</Text>

      <Text style={styles.overviewText}>{movie.overview}</Text>
    </VStack>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  titleText: {
    color: "#ffffff",
  },
  overviewText: {
    color: "#ffffff",
  },
  cardImage: {
    width: 150,
    height: 220,
    marginTop: 25,
    borderRadius: 16,
  },
  details: {},
});
