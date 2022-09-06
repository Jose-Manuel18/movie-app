import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Colors } from "../../Utils/Colors";
import ReusableText from "../../ReusableText";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../../State/GenreState";
import { TrendingState } from "../../../State/TrendingState";
import { Rating } from "react-native-rating-element";

const ForYouCard = ({ movie, onPress }) => {
  const { state: genreState, contents: genreContents } =
    useRecoilValueLoadable(GenreState);
  const { state, contents } = useRecoilValueLoadable(TrendingState);

  if (genreState === "hasError " || genreState === "loading") return null;
  if (state === "hasError " || state === "loading") return null;
  const results = contents.results;
  const currentGenre = genreContents.genres?.filter((genre) =>
    movie?.genre_ids?.includes(genre.id)
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.innerContainer} onPress={onPress}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.trendingCardImage}
          />
          <View style={{ width: 30 }}></View>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>{movie.title || movie.name}</Text>
            <Text style={styles.genreText}>
              {(currentGenre || []).map((genre) => genre.name).join(", ")}.
            </Text>
            <View style={styles.ratingContainer}>
              <Rating
                rated={movie.vote_average / 2}
                totalCount={5}
                ratingColor={Colors.StarColor}
                size={14}
                readonly
                icon="ios-star"
                direction="row"
              />
              <Text style={styles.genreText}>
                {movie.vote_average / 2 + "/5"}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ForYouCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 8,
  },
  innerContainer: {
    flexDirection: "row",
    backgroundColor: Colors.LightPurple,
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
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
  },
  rating: {
    paddingRight: 10,
  },
});
