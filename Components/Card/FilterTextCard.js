import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../Utils/Colors";

const FilterTextCard = ({ genre, onPress, isSelected }) => {
  console.log(genre);
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
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
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