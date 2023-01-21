import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { Colors } from "./Utils/Colors";

export const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={Colors.Rose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.DarkPurple,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
