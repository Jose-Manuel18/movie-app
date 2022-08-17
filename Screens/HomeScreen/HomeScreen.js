import { StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import MoviesAPI from "../../API/PopularMoviesAPI";
import ReusableText from "../../Components/ReusableText";
import SeeAllButton from "../../Components/Buttons/SeeAllButton";
import TopRatedMoviesAPI from "../../API/TrendingMoviesAPI";
import SeriesAPI from "../../API/SeriesAPI";
import SearchButton from "../../Components/SearchBarButton/SearchButton";
import { useNavigation } from "@react-navigation/native";


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
        <SeriesAPI />
      </ScrollView>
      <Text> hhholaaa</Text>
      <Text>
        hdgdgdggdgdgddfgdgdf
      </Text>
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
