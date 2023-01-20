import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchButton from "../../Components/SearchBarButton/SearchButton";

import ForYou from "../../Components/Card/ForYou/ForYou";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { GenreList } from "./GenreList";
export const ExploreScreen = () => {
  const { top } = useSafeAreaInsets();
  const Container = styled.View`
    flex: 1;
    padding-top: ${top}px;
    background-color: ${Colors.DarkPurple};
  `;

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchButton />
        <Block size={16} />
        <GenreList />
        <ForYou />
      </ScrollView>
    </Container>
  );
};

const ScrollView = styled.ScrollView``;

const Block = styled.View<{ size?: number }>`
  height: ${(p) => p.size}px;
`;
