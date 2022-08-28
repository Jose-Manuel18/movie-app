import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CardImage from "../Cards/CardImage";
import { useNavigation } from "@react-navigation/native";
import { take } from "lodash";

const CarouselImages = ({ info }) => {
  const { navigate } = useNavigation();
  // const { width: viewportWidth, height: viewportHeight } =
  //   Dimensions.get("window");
  // const SLIDE_WIDTH = Math.round(viewportWidth / 2.6);
  // const ITEM_HORIZONTAL_MARGIN = 5;
  // const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
  // const SLIDER_WIDTH = viewportWidth;
  // let RandomNumber = Math.floor(Math.random() * 4) + 1;

  return (
    <View>
      <FlatList
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
      />
      {/* <Carousel
        initialNumToRender={3}
        layout="default"
        data={take(info, 5)}
        initialScrollIndex={RandomNumber}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        activeSlideAlignment={"center"}
        contentContainerCustomStyle={{
          overflow: "hidden",
          width: 170 * info.length,
        }}
        onSnapToItem={(index) => setIndex(index)}
        ref={isCarousel}
        // autoplayInterval={500}
        // autoplay={true}
        // inactiveSlideScale={1}
        // inactiveSlideOpacity={1}
        renderItem={({ item }) => {
          return (
            <CardImage
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
      />
      <Pagination
        dotsLength={5}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: Colors.Rose,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: Colors.TextColor,
          // Define styles for inactive dots here
        }}
        // inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}
    </View>
  );
};

export default CarouselImages;

const styles = StyleSheet.create({});
