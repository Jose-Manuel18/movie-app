import { StyleSheet, View, TouchableWithoutFeedback, Text } from "react-native";
import React, { useCallback, useRef, useMemo } from "react";
import DetailsCard from "./DetailsCard";
import { Colors } from "../../Components/Utils/Colors";
import BottomSheet, { useBottomSheetTimingConfigs } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Easing } from "react-native-reanimated";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";

const DetailScreen = ({ route }) => {
  const { goBack } = useNavigation();
  const movieDetails = route.params.movieDetails;
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["40%"], []);
  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const timingConfig = useBottomSheetTimingConfigs({
    duration: 200,
    easing: Easing.linear,
  });

  return (
    <BlurView style={styles.container} intensity={8}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        style={{ flex: 1 }}
        onChange={handleSnapPress}
        animateOnMount={true}
        enablePanDownToClose={true}
        animationConfigs={timingConfig}
        enableOverDrag={true}
        onClose={() => goBack()}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        backdropComponent={() => {
          return (
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                goBack();
              }}
            />
          );
        }}
        backgroundComponent={() => (
          <View style={{ flex: 1, backgroundColor: Colors.DarkPurple }} />
        )}
      >
        <View style={styles.contentContainer}>
          <DetailsCard movie={movieDetails} />
        </View>
      </BottomSheet>
    </BlurView>
  );
};

export default DetailScreen;
const BlockY = styled.View<{ size?: number }>`
  height: ${(p) => p.size}px;
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.LightPurple,
    paddingBottom: 32,
  },
  handleStyle: {
    backgroundColor: Colors.LightPurple,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  handleIndicatorStyle: {
    backgroundColor: "#fff",
  },
});
