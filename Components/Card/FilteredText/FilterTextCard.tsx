import { StyleSheet, View } from "react-native";
import React from "react";
import { Colors } from "../../Utils/Colors";
import { sliderTextProps } from "./types";
import styled from "styled-components/native";

const FilterTextCard = ({ genre, onPress, isSelected }: sliderTextProps) => {
  return (
    <Container onTouchEnd={(e) => e.stopPropagation()}>
      <TouchableOpacity
        style={[isSelected ? styles.buttonSelected : null, styles.button]}
        onPress={onPress}
      >
        <Text>{genre.name}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default FilterTextCard;
const Container = styled.View<{ color?: string | null }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: ${(p) => p.color};
`;
const Text = styled.Text`
  color: white;
`;
const TouchableOpacity = styled.TouchableOpacity``;
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
