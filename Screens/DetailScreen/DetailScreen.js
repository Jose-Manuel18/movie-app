import { StyleSheet, View, Text } from "react-native";
import React, { useCallback, useRef, useMemo, useState } from "react";
import DetailsCard from "./DetailsCard";
import { Colors } from "../../Components/Utils/Colors";
import BottomSheet, {
  BottomSheetFlatList,
  useBottomSheetTimingConfigs,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Easing } from "react-native-reanimated";

const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const dataResults = route.params.movies;
  const mId = route.params.movieDetails;
  const genres = route.params.genero;

  const movieDetails = dataResults.filter((details) => details === mId);

  // const genreDetails = genres.filter((details) => details== dataResults)
  // console.log(mId.genre_ids);
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["40%"], []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  // const animationConfigs = useBottomSheetSpringConfigs({
  //   damping: 40,
  //   overshootClamping: true,
  //   restDisplacementThreshold: 0.1,
  //   restSpeedThreshold: 0.1,
  //   stiffness: 500,
  // });

  const timingConfig = useBottomSheetTimingConfigs({
    duration: 200,
    easing: Easing.linear,
  });

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        style={{ backgroundColor: Colors.DarkPurple }}
        onChange={handleSnapPress}
        animateOnMount={true}
        index={0}
        enablePanDownToClose={true}
        animationConfigs={timingConfig}
        // backdropComponent={CustomBackdrop}
        onClose={() => {
          navigation.goBack();
        }}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
      >
        <BottomSheetFlatList
          data={movieDetails}
          keyExtractor={(i) => i}
          renderItem={({ item }) => {
            return <DetailsCard movie={item} />;
          }}
          contentContainerStyle={styles.contentContainer}
        />
        <Text>
          {genres.map((item) => {
            return <Text>{item.name}</Text>;
          })}
        </Text>
      </BottomSheet>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#transparent",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
  },
  handleStyle: {
    backgroundColor: Colors.LightPurple,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  handleIndicatorStyle: {
    backgroundColor: "white",
  },
  backDrop: {
    backgroundColor: "red",
  },
});
