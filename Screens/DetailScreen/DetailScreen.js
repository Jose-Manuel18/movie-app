import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useCallback, useRef, useMemo } from "react";
import DetailsCard from "./DetailsCard";
import { Colors } from "../../Components/Utils/Colors";
import BottomSheet, { useBottomSheetTimingConfigs } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Easing } from "react-native-reanimated";
import { isLiked } from "../../Atom/isLiked";
import { useRecoilState, useSetRecoilState } from "recoil";
import IconButton from "../../Components/IconButton";

const DetailScreen = ({ route }) => {
  const [liked, setLiked] = useRecoilState(isLiked);
  console.log(liked);
  const navigation = useNavigation();
  const movieDetails = route.params.movieDetails;
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["30%"], []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const timingConfig = useBottomSheetTimingConfigs({
    duration: 200,
    easing: Easing.linear,
  });

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
          <IconButton
            icon="heart"
            color="white"
            size={23}
            onPress={() => {
              movieDetails === liked ? setLiked([""]) : setLiked(movieDetails);
            }}
          />
        </View>
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
