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
import { AirbnbRating } from "@rneui/themed";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";

const SearchCard = ({ movie, onPressFunction }) => {
  const { state, contents } = useRecoilValueLoadable(GenreState);
  if (state === "hasError" || state === "loading") return null;
  const currentGenre = contents.genres?.filter((genre) =>
    movie?.genre_ids?.includes(genre.id)
  );

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
            <Text style={styles.genreText}>
              {(currentGenre || []).map((genre) => genre.name).join(", ")}.
            </Text>
            <View style={styles.ratingContainer}>
              <AirbnbRating
                reviewSize={0}
                isDisabled={true}
                size={10}
                defaultRating={movie.vote_average / 2}
                ratingContainerStyle={styles.rating}
                showRating={false}
              />
              <Text style={styles.genreText}>{movie.vote_average}</Text>
            </View>
            {/* <FlatList
              data={genero}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                return (
                  <View key={index}>
                    <Text>
                      {item.id == movie.genre_ids ? (
                        <Text>{item}</Text>
                      ) : (
                        <Text>no</Text>
                      )}
                    </Text>
                  </View>
                );
              }}
            /> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
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
    paddingLeft: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    paddingTop: 8,
    color: "white",
    textAlign: "justifyContent",
    flexDirection: "row",
    fontSize: 15,
  },
  genreText: {
    color: "white",
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    paddingRight: 10,
  },
});
