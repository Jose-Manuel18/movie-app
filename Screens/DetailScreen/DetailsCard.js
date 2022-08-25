import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { VStack, HStack, Spacer } from "react-native-stacks";

const DetailsCard = ({ movie }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={{ width: 50 }}></View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{movie.title || movie.name}</Text>
          <Text style={styles.overviewText}>{movie.overview}</Text>
          <Text>{movie.release_date}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsCard;
const { width } = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: width,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: { flex: 1 },
  cardImage: {
    flex: 1,
    resizeMode: "contain",
    width: 150,
    height: 175,
    borderRadius: 16,
  },
  textContainer: {
    flex: 2,
    flexDirection: "column",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  overviewText: {
    fontSize: 13,
    fontWeight: "normal",
    color: "#ffffff",
  },
});
