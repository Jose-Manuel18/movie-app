import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HStack, Spacer } from "react-native-stacks";
import { Colors } from "../Utils/Colors";
import GenreAPI from "../../API/GenreAPI";
import GenreCard from "./GenreCard";

const SearchCard = ({ movie, onPressFunction, genre }) => {
  // const movieGenre = movie.filter(
  //   (details) => details.id === SELECTED_MOVIE
  // );
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressFunction}>
        <View style={styles.innerContainer}>
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
            <Text>{movie.vote_average}</Text>
            <GenreCard/>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: Colors.LightPurple,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 16,
  },
  innerContainer: {
    flexDirection: "row",
  },
  trendingCardImageContainer: {},
  trendingCardImage: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    resizeMode: "stretch",
    width: 80,
    height: 110,
  },
  textContainer: {
    flex: 1,
    maxWidth: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingTop: 8,
    color: "white",
    textAlign: "center",
    flexDirection: "row",
    fontSize:15,
  },
});
