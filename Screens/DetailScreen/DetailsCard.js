import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import IconButton from "../../Components/IconButton";
import { isLiked, likedState } from "../../Atom/isLiked";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { TouchableOpacity } from "react-native";

const DetailsCard = ({ movie, size, onPress }) => {
  const setIsLiked = useSetRecoilState(isLiked);
  const buttonHandler = useRecoilValue(likedState);
  const [deleteLike, setDeleteLike] = useRecoilState(isLiked);
  const index = deleteLike.findIndex((listItem) => listItem === movie);

  const deleteItem = () => {
    const newList = removeItemAtIndex(deleteLike, index);
    setDeleteLike(newList);
  };
  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={{ width: 50 }}></View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{movie.title || movie.name}</Text>
          <Text style={styles.overviewText}>{movie.overview}</Text>
          <Text>{movie.release_date}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            index >= 0
              ? deleteItem()
              : setIsLiked((movies) => [...movies, movie]);
          }}
          style={styles.buttonContainer}
        >
          <IconButton
            icon={index >= 0 ? "heart" : "heart-outline"}
            color="white"
            size={24}
            disabled
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsCard;
const { width } = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: width,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: { flex: 1 },
  cardImage: {
    flex: 1,
    resizeMode: "contain",
    width: 150,
    height: 175,
    borderRadius: 16,
  },
  textContainer: {
    flex: 2,
    flexDirection: "column",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  overviewText: {
    fontSize: 13,
    fontWeight: "normal",
    color: "#ffffff",
  },
  buttonContainer: {
    width: 25,
    height: 25,
    // backgroundColor: "#ffffff",
  },
  deleteButton: {
    backgroundColor: "white",
  },
});
