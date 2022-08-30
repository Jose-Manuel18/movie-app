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
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={likedMovie}
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
        {/* {likedMovie.map((movie) => {
          return <Text key={movie.id}>{movie.title || movie.name}</Text>;
        })} */}
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
