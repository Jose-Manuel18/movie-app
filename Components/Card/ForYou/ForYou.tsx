import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../../State/GenreState";
import { TrendingState } from "../../../State/TrendingState";
import { Colors } from "../../Utils/Colors";
import { take } from "lodash";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Block } from "../../Block";
import { Loading } from "../../Loading";
import SearchCard from "../SearchCard";
import { movieData } from "../../Carousel/SeriesCarousel/types";
import { FlatList } from "react-native";
const ForYou = () => {
  const { state: genreState, contents: genreContents } =
    useRecoilValueLoadable(GenreState);
  const { state, contents } = useRecoilValueLoadable(TrendingState);
  const { navigate } = useNavigation();
  if (genreState === "hasError" || genreState === "loading") return null;
  if (state === "hasError") return null;
  if (state === "loading") return <Loading />;
  return (
    <Container>
      <Block size={16} />
      <Text>For You</Text>
      <Block size={24} />
      <FlatList
        data={contents.results}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Block size={16} />}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <SearchCard
              onPress={() => {
                navigate("DetailScreen", { movieDetails: item });
              }}
              movie={item}
            />
          );
        }}
      />
      {/* {take(contents.results, 10).map((item: movieData, index) => {
        return (
          <CardContainer key={item.id}>
            <Block size={index === 0 ? 0 : 16} />
            <SearchCard
              onPress={() => {
                navigate("DetailScreen", { movieDetails: item });
              }}
              movie={item}
            />
          </CardContainer>
        );
      })} */}
    </Container>
  );
};

export default ForYou;

const Container = styled.View`
  flex: 1;
`;
const Text = styled.Text`
  color: ${Colors.TextColor};
  font-size: 20px;
  font-weight: bold;
  padding-left: 16px;
`;
