import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useCallback, useRef, useMemo } from "react";
import DetailsCard from "./DetailsCard";
import { Colors } from "../../Components/Utils/Colors";
import BottomSheet, { useBottomSheetTimingConfigs } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Easing } from "react-native-reanimated";
import { TouchableOpacity } from "react-native";
import { gql, useQuery } from "@apollo/client";

const DetailScreen = ({ route }) => {
  const { goBack } = useNavigation();
  const movieDetails = route.params.movieDetails;
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["30%", "50%"], []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const timingConfig = useBottomSheetTimingConfigs({
    duration: 200,
    easing: Easing.linear,
  });
  const ME = gql`
    query Query {
      me {
        likes {
          id
          title
          rating
          poster
          movie_db_id
        }
      }
    }
  `;
  const { loading, error, data, refetch } = useQuery(ME);
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
        enableOverDrag={true}
        onClose={() => goBack()}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        backdropComponent={() => {
          return (
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={async () => {
                await refetch({ ME });
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
    </TouchableWithoutFeedback>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
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
});
