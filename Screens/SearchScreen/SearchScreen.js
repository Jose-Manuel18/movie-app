import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchBar from "../../Components/SearchBar";
import SearchCard from "../../Components/Card/SearchCard";
import { useNavigation } from "@react-navigation/native";
import SearchAPI from "../../API/SearchAPI";
import GenreAPI from "../../API/GenreAPI";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchAPI />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
    paddingTop: 60,
  },
});
