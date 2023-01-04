import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../Utils/Colors";
import { sliderTextProps } from "./types";

const FilterTextCard = ({ genre, onPress, isSelected }: sliderTextProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[isSelected ? styles.buttonSelected : null, styles.button]}
        onPress={onPress}
      >
        <Text style={styles.text}>{genre.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterTextCard;

const styles = StyleSheet.create({
  container: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSelected: {
    backgroundColor: Colors.Rose,
  },

  button: {
    height: "100%",
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
  },
});