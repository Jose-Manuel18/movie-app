import { StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components/native";

export const AccountComponent = () => {
  return (
    <View>
      <Text>AccountComponent</Text>
    </View>
  );
};

const View = styled.View`
  flex: 1;
`;
const Text = styled.Text`
  color: black;
`;
