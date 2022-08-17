import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useCallback, useRef, useMemo, useState, Fragment } from "react";
import DetailsCard from "./DetailsCard";
import { Colors } from "../../Components/Utils/Colors";
import BottomSheet, {
  BottomSheetFlatList,
  useBottomSheetTimingConfigs,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Easing } from "react-native-reanimated";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";

const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const movieDetails = route.params.movieDetails;
  const genres = route.params.genero;
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["40%"], []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const timingConfig = useBottomSheetTimingConfigs({
    duration: 200,
    easing: Easing.linear,
  });

  const { state, contents } = useRecoilValueLoadable(GenreState);
  if (state === "hasError" || state === "loading") return null;
  // console.warn(content);
  const currentGenre = contents.genres?.filter((genre) =>
    movieDetails?.genre_ids?.includes(genre.id)
  );

  // const currentGenre = undefined;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        sheetRef.current?.close();
      }}
      style={styles.container}
    >
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
        <View style={styles.contentContainer}>
          <DetailsCard movie={movieDetails} />
          <Text>
            {(currentGenre || []).map((genre) => genre.name).join(", ")}.
          </Text>
        </View>
        {/* <BottomSheetFlatList
          data={movieDetails}
          keyExtractor={(i) => i}
          renderItem={({ item }) => {
          }}
          contentContainerStyle={styles.contentContainer}
        /> */}
      </BottomSheet>
    </TouchableWithoutFeedback>
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
