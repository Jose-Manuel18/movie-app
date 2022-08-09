import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SeeAllButton = ({ onPressFunction }) => {
  return (
    <TouchableOpacity onPress={onPressFunction}>
      <View style={styles.container}>
        <Text style={styles.text}>See All</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SeeAllButton;

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
  },
  text: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 13,
    fontWeight: "normal",
  },
});
