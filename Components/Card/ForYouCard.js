import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "../Utils/Colors";
import ReusableText from "../ReusableText";

const ForYouCard = ({ movie }) => {
  
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={styles.cardImage}
      />
      <ReusableText>{movie.title || movie.name}</ReusableText>
      <ReusableText>{movie.genre}</ReusableText>
      <Text>ForYouCard</Text>
    </View>
  );
};

export default ForYouCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LightPurple,
    borderRadius: 16,
  },
  text: {
    color: Colors.TextColor,
  },
  cardImage: {
    width: 150,
    height: 220,
    marginTop: 25,
    borderRadius: 16,
  },
});
