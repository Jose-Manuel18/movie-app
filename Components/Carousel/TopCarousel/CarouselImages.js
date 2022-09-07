import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import CardImage from "../Cards/CardImage";
import { useNavigation } from "@react-navigation/native";
import { take } from "lodash";
import { Colors } from "../../Utils/Colors";

import Carousel, { Pagination } from "react-native-snap-carousel";

const CarouselImages = ({ info }) => {
  const { navigate } = useNavigation();
  const [index, setIndex] = useState(0);
  const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get("window");
  const SLIDE_WIDTH = Math.round(viewportWidth / 2.8);
  const ITEM_HORIZONTAL_MARGIN = 5;
  const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 0.9;
  const SLIDER_WIDTH = viewportWidth;
  let RandomNumber = Math.floor(Math.random() * 4) + 1;
  const isCarousel = useRef();
  return (
    <View>
      {/* <FlatList
        data={take(info, 10)}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <CardImage
                onPressFunction={() => {
                  navigate("DetailScreen", {
                    movies: info,
                    movieDetails: item,
                  });
                }}
                movie={item}
              />
            </View>
          );
        }}
      /> */}
      <Carousel
        layout="default"
        data={take(info, 5)}
        initialScrollIndex={RandomNumber}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        activeSlideAlignment={"center"}
        scrollEndDragDebounceValue={2}
        contentContainerCustomStyle={{
          overflow: "hidden",
          width: 60 * info.length,
        }}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        ref={isCarousel}
        // autoplayInterval={500}
        // autoplay={true}
        inactiveSlideScale={0.6}
        inactiveSlideOpacity={0.5}
        renderItem={({ item }) => {
          return (
            <CardImage
              movie={item}
              onPress={() => {
                navigate("DetailScreen", {
                  movieDetails: item,
                });
              }}
            />
          );
        }}
      />
      <Pagination
        dotsLength={5}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 4,
          height: 10,
          borderRadius: 16,
          paddingHorizontal: 10,
          backgroundColor: Colors.Rose,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: Colors.TextColor,
          // Define styles for inactive dots here
        }}
        // inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default CarouselImages;

const styles = StyleSheet.create({});
