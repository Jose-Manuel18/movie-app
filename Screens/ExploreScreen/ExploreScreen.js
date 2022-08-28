import { StyleSheet, View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchButton from "../../Components/SearchBarButton/SearchButton";
import { useRecoilValueLoadable } from "recoil";
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
        <FlatList
          data={take(currentMovie, 3)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <ExploreMovieCard
                movie={item}
                onPress={() => {
                  navigate("DetailScreen", {
                    movieDetails: item,
                  });
                }}
              />
            );
          }}
        />
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
    paddingHorizontal: 14,
  },
  movieText: {
    color: "white",
  },
});
