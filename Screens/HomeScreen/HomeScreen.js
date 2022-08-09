import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import MoviesAPI from "../../API/PopularMoviesAPI";
import ReusableText from "../../Components/ReusableText";
import SeeAllButton from "../../Components/Buttons/SeeAllButton";
import TopRatedMoviesAPI from "../../API/TrendingMoviesAPI";
import SeriesAPI from "../../API/SeriesAPI";
import { VStack, HStack, Spacer } from "react-native-stacks";
import SearchButton from "../../Components/SearchBarButton/SearchButton";
import { useNavigation } from "@react-navigation/native";
import GenreAPI from "../../API/GenreAPI";

const HomeScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchButton />
        <MoviesAPI />
        <View style={styles.headerContainer}>
          <ReusableText modo="bigText">Trending</ReusableText>
          <SeeAllButton onPressFunction={() => {}} />
        </View>
        <TopRatedMoviesAPI />
        <View style={styles.headerContainer}>
          <ReusableText modo="bigText">Series</ReusableText>
          <SeeAllButton onPressFunction={() => {}} />
        </View>
        <GenreAPI/>
        <SeriesAPI />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
    paddingTop: 60,
    // paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
  },
});
