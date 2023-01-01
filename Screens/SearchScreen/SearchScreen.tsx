import { StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchAPI from "../../API/SearchAPI";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import styled from "styled-components/native";
const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const View = styled.View`
    padding-top: ${top};
    background-color: ${Colors.DarkPurple};
    flex: 1;
  `;
  return (
    <View>
      <SearchAPI />
    </View>
  );
};

export default SearchScreen;
