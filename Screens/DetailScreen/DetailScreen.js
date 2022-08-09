import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import DetailsCard from "./DetailsCard";
import { Colors } from "../../Components/Utils/Colors";
const DetailScreen = ({ route }) => {
  const dataResults = route.params.movies;
  const mId = route.params.movieDetails;
  const ALL_MOVIES = dataResults;
  const SELECTED_MOVIE = mId;
  const movieDetails = ALL_MOVIES.filter((details) => details.id === SELECTED_MOVIE
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={movieDetails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <DetailsCard movie={item} />;
        }}
      />
      
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
  },
});
