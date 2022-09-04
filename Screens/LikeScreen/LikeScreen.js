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
import { useRecoilState, useRecoilValue } from "recoil";
import { isLiked } from "../../Atom/isLiked";
import SearchCard from "../../Components/Card/SearchCard";
import { useNavigation } from "@react-navigation/native";
const LikeScreen = () => {
  const likedMovie = useRecoilValue(isLiked);
  const { navigate } = useNavigation();
  const sortedMovie = [...likedMovie].sort((a, b) => a < b);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={sortedMovie}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <SearchCard
                movie={item}
                onPress={() => {
                  return navigate("DetailScreen", { movieDetails: item });
                }}
              />
            );
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
    paddingTop: 50,
  },
  innerContainer: {
    // backgroundColor: "white",
  },
});
