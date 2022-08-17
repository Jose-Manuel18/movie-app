import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TrendingCard from "../Cards/TrendingCard";
import { useNavigation } from "@react-navigation/native";
import { take } from "lodash";

const TrendingCarousel = ({ info }) => {
  const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get("window");
  const SLIDE_WIDTH = Math.round(viewportWidth / 2.6);
  const ITEM_HORIZONTAL_MARGIN = 4;
  const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
  const SLIDER_WIDTH = viewportWidth;
  let RandomNumber = Math.floor(Math.random() * 9) + 1;
  const { navigate } = useNavigation();
  return (
    <View>
      <FlatList
        data={take(info, 10)}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TrendingCard
              onPressFunction={() => {
                navigate("DetailScreen", {
                  movieDetails: item,
                });
              }}
              movie={item}
            />
          );
        }}
      />
      {/* <Carousel
        initialNumToRender={20}
        layout="default"
        data={take(info, 10)}
        initialScrollIndex={RandomNumber}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={120}
        // inactiveSlideScale={1}
        // inactiveSlideOpacity={1}
        activeSlideAlignment={"start"}
        contentContainerCustomStyle={{
          overflow: "hidden",
          width: 60 * info.length,
        }}
        // autoplay={true}
        // autoplayInterval={500}
        renderItem={({ item }) => {
          return (
            <TrendingCard
              onPressFunction={() => {
                navigate("DetailScreen", {
                  movies: info,
                  movieDetails: item.id,
                });
              }}
              movie={item}
            />
          );
        }}
      /> */}
    </View>
  );
};

export default TrendingCarousel;

const styles = StyleSheet.create({});
