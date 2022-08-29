import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchButton from "../../Components/SearchBarButton/SearchButton";
import { GenreState } from "../../State/GenreState";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { isLiked } from "../../Atom/isLiked";
import SearchCard from "../../Components/Card/SearchCard";
const LikeScreen = () => {
  const likedMovie = useRecoilState(isLiked);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={likedMovie}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <SearchCard movie={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
  },
  innerContainer: {
    paddingTop: 50,
  },
});
