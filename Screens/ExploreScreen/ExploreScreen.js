import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchButton from "../../Components/SearchBarButton/SearchButton";
import { useNavigation } from "@react-navigation/native";
import ForYouCard from "../../Components/Card/ForYouCard";

const ExploreScreen = ({}) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <SearchButton />
      {/* <ForYouCard /> */}
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
});
