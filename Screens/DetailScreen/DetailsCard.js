import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { VStack, HStack, Spacer } from "react-native-stacks";

const DetailsCard = ({ movie }) => {
  
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={styles.cardImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{movie.title || movie.name}</Text>
        <Text style={styles.overviewText}>{movie.overview}</Text>
        <Text>{movie.release_date}</Text>
      </View>
    </View>
  );
};

export default DetailsCard;
const SCREEN_WIDTH = Dimensions.get("window").width; 
console.log(SCREEN_WIDTH)
const styles = StyleSheet.create({
  container: {
   
    maxWidth: 392,
    marginHorizontal: 8,
    flexDirection: "row",
  },
  cardImage: {
    flex: 1,
    resizeMode: "stretch",
    width: 90,
    height: 140,
    marginTop: 25,
    borderRadius: 16,
  },
  textContainer: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 5,
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
