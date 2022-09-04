import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchButton from "../../Components/SearchBarButton/SearchButton";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";
import FilterTextCard from "../../Components/Card/FilterTextCard";
import ExploreMovieCard from "../../Components/Card/ExploreMovieCard";
import { useNavigation } from "@react-navigation/native";
import { NowPlayingState } from "../../State/NowPlayingState";
import { take } from "lodash";

const ExploreScreen = () => {
  const { navigate } = useNavigation();
  const [selected, setSelected] = useState(null);
  const { state, contents } = useRecoilValueLoadable(NowPlayingState);
  const { state: genreState, contents: genreContents } =
    useRecoilValueLoadable(GenreState);

  const currentMovie = contents?.results?.filter((movies) =>
    movies?.genre_ids.includes(selected)
  );
  // const index = contents?.results?.indexOf((movies) => movies === currentMovie);
  const index = contents?.results[0];
  const indexCurrent = currentMovie[0];
  console.log(index.id === contents.results[0].id);
  if (state === "hasError" || state === "loading") return null;
  if (genreState === "hasError" || genreState === "loading") return null;
  return (
    <View style={styles.container}>
      <SearchButton />
      <View style={styles.filterContainer}>
        <FlatList
          data={genreContents.genres}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <FilterTextCard
                genre={item}
                isSelected={selected === item.id}
                onPress={() =>
                  item.id === selected
                    ? setSelected(null)
                    : setSelected(item.id)
                }
              />
            );
          }}
        />
        <View style={styles.imageContainer}>
          <Image
            style={styles.bigImage}
            source={{
              uri:
                currentMovie.length === 0
                  ? `https://image.tmdb.org/t/p/w500${contents.results[0].poster_path}`
                  : `https://image.tmdb.org/t/p/w500${currentMovie[0].poster_path}`,
            }}
          />
          <View style={styles.smallerImageContainer}>
            <Image
              style={styles.smallerImage}
              source={{
                uri:
                  currentMovie.length === 0
                    ? `https://image.tmdb.org/t/p/w500${contents.results[1].poster_path}`
                    : `https://image.tmdb.org/t/p/w500${currentMovie[1].poster_path}`,
              }}
            />
            <View style={{ height: 8 }} />
            <Image
              style={styles.smallerImage}
              source={{
                uri:
                  currentMovie.length === 0
                    ? `https://image.tmdb.org/t/p/w500${contents.results[2].poster_path}`
                    : `https://image.tmdb.org/t/p/w500${currentMovie[2].poster_path}`,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
    paddingTop: 60,
  },
  filterContainer: {
    paddingHorizontal: 8,
  },
  movieText: {
    color: "white",
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 14,
  },
  bigImage: {
    resizeMode: "stretch",
    width: 210,
    height: 350,
    borderRadius: 16,
  },
  smallerImageContainer: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 12,
  },
  smallerImage: {
    resizeMode: "stretch",
    width: 120,
    height: 170,
    borderRadius: 12,
  },
});
