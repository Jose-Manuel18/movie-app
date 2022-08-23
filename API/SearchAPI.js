import { StyleSheet, View, TextInput, FlatList, Text } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import SearchCard from "../Components/Card/SearchCard";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { GenreState } from "../State/GenreState";

const SearchAPI = () => {
  // const { isLoading, error, data } = useQuery(["multiSearch"], () =>
  // fetch(
  //   "https://api.themoviedb.org/3/search/multi?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
  // ).then((res) => res.json())

  // if (error || isLoading) return null;
  const { navigate } = useNavigation();
  const [search, setSearch] = useState("");
  const [newData, setNewData] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    const timeOut = setTimeout(
      () =>
        fetch(
          `https://api.themoviedb.org/3/search/multi?&api_key=a24edf480d427f5cb8cb54efb9ee9007&query=${search}&languages=en-US`
        )
          .then((response) => response.json())
          .then((responseJson) => {
            setFilteredDataSource(responseJson);
            setNewData(responseJson);
          })
          .catch((error) => {
            console.error(error);
          }),
      500
    );
    return () => {
      clearTimeout(timeOut);
    };
  }, [search]);

  const searchFilterFunction = (text) => {
    if (text) {
      setSearch(text);
    } else {
      setFilteredDataSource(newData);
      setSearch(text);
    }
  };

  const { isLoading, error, data } = useQuery(["genreAPI"], () =>
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a24edf480d427f5cb8cb54efb9ee9007&languages=en-US"
    ).then((res) => res.json())
  );
  if (error || isLoading) return null;
  // const array3 = filteredDataSource.results?.concat(data)

  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        onChangeText={(text) => searchFilterFunction(text)}
        deleteText={() => setSearch("")}
      />
      <FlatList
        data={filteredDataSource.results}
        keyExtractor={(item) => item.id}
        // ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({ item }) => {
          if (filteredDataSource.results) {
            return (
              <SearchCard
                movie={item}
                genero={data.genres}
                onPressFunction={() => {
                  navigate("DetailScreen", {
                    movieDetails: item,
                    genero: data.genres,
                  });
                }}
              />
            );
          } else {
          }
        }}
      />
    </View>
  );
};

export default SearchAPI;

const styles = StyleSheet.create({});
