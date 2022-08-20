import { Pressable, StyleSheet, View, Text } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchButton from "../../Components/SearchBarButton/SearchButton";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";

const ExploreScreen = ({}) => {
  const { navigate } = useNavigation();
  const { state, contents } = useRecoilValueLoadable(GenreState);
  if (state === "hasError" || state === "loading") return null;
  return (
    <View style={styles.container}>
      <SearchButton />
      <Text>{contents.genres.map((genre) => genre.name)}</Text>
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
