import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../Utils/Colors";

import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";

const SearchCard = ({ movie, onPress }) => {
  const { state, contents } = useRecoilValueLoadable(GenreState);
  if (state === "hasError" || state === "loading") return null;
  const currentGenre = contents.genres?.filter((genre) =>
    movie?.genre_ids?.includes(genre.id)
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.innerContainer}>
          <View style={styles.trendingCardImageContainer}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
              style={styles.trendingCardImage}
            />
          </View>
          <View style={{ width: 30 }}></View>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>{movie.title || movie.name}</Text>
            <Text style={styles.genreText}>
              {(currentGenre || []).map((genre) => genre.name).join(", ")}.
            </Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.genreText}>
                {movie.vote_average / 2 + ".5"}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
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
  contentContainer: {
    flex: 1,
    maxWidth: 200,
    paddingLeft: 30,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    paddingTop: 8,
    color: "white",
    textAlign: "left",
    flexDirection: "row",
    fontSize: 15,
    paddingLeft: 2,
  },
  genreText: {
    color: "white",
    fontSize: 12,
    paddingLeft: 3,
  },
  ratingContainer: {
    flexDirection: "row",
    paddingLeft: 0,
  },
  rating: {
    paddingRight: 10,
  },
});
