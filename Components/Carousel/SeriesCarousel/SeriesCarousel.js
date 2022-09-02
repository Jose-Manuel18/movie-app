import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SeriesCard from "../Cards/SeriesCard";
import { useNavigation } from "@react-navigation/native";
import { take } from "lodash";
const SeriesCarousel = ({ info }) => {
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
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <SeriesCard
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
      {/* <Carousel
        initialNumToRender={20}
        layout="default"
        data={take(info, 10)}
        initialScrollIndex={RandomNumber}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={120}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        activeSlideAlignment={"start"}
        contentContainerCustomStyle={{
          overflow: "hidden",
          width: 60 * info.length,
        }}
        // autoplay={true}
        // autoplayInterval={500}
        renderItem={({ item }) => {
          return (
            <SeriesCard
              onPressFunction={() => {
                navigation.navigate("DetailScreen", {
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

export default SeriesCarousel;

const styles = StyleSheet.create({});
