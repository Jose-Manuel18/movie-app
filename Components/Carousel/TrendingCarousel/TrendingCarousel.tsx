import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TrendingCard from "../Cards/TrendingCard";
import { useNavigation } from "@react-navigation/native";
import { take } from "lodash";

const TrendingCarousel = ({ info }) => {
  const { navigate } = useNavigation();
  return (
    <View onTouchMove={(e) => e.stopPropagation()}>
      <FlatList
        data={take(info, 10)}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TrendingCard
              onPress={() => {
                navigate("DetailScreen", {
                  movieDetails: item,
                });
              }}
              movie={item}
            />
          );
        }}
      />
    </View>
  );
};

export default TrendingCarousel;

const styles = StyleSheet.create({});
