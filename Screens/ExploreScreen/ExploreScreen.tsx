import React, { useState } from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchButton from "../../Components/SearchBarButton/SearchButton";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";
import { NowPlayingState } from "../../State/NowPlayingState";
import ForYou from "../../Components/Card/ForYou/ForYou";
import { selectedState } from "./type";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { FlatList, Text, View } from "react-native";
import FilterTextCard from "../../Components/Card/FilteredText/FilterTextCard";
import { Loading } from "../../Components/Loading";
import { movieData } from "../../Components/Carousel/SeriesCarousel/types";
import { take } from "lodash";
export const ExploreScreen = () => {
  const { top } = useSafeAreaInsets();
  const Container = styled.View`
    flex: 1;
    padding-top: ${top}px;
    background-color: ${Colors.DarkPurple};
  `;
  const [selected, setSelected] = useState<selectedState | null>(null);
  const { state, contents } = useRecoilValueLoadable(NowPlayingState);
  const { state: genreState, contents: genreContents } =
    useRecoilValueLoadable(GenreState);

  const currentMovie = contents?.results?.filter(
    (movies: { genre_ids: (selectedState | null)[] }) =>
      movies?.genre_ids.includes(selected),
  );
  if (
    typeof currentMovie === "undefined" ||
    typeof contents.results === "undefined"
  ) {
    return null;
  }
  const results = contents.results;

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchButton />
        <Block size={16} />
        <GenreHeader>
          <FlatList
            data={genreContents.genres}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <FilterTextCard
                  genre={item}
                  isSelected={selected === item.id}
                  onPress={() =>
                    item.id === selected
                      ? setSelected(null)
                      : setSelected(item.id)
                  }
                />
              );
            }}
          />
          <Block size={16} />
        </GenreHeader>
        <PosterContainer>
          <FlatList
            data={
              selected === null
                ? take(contents.results, 1)
                : take(currentMovie, 1)
            }
            horizontal={true}
            ListFooterComponent={() => (
              <SmallPosterContainer>
                <SmallerPoster
                  source={{
                    uri:
                      selected === null
                        ? `https://image.tmdb.org/t/p/w500${results[1].poster_path}`
                        : `https://image.tmdb.org/t/p/w500${currentMovie[1]?.poster_path}`,
                  }}
                />
                <Block size={8} />
                <SmallerPoster
                  source={{
                    uri:
                      selected === null
                        ? `https://image.tmdb.org/t/p/w500${results[2].poster_path}`
                        : `https://image.tmdb.org/t/p/w500${currentMovie[2]?.poster_path}`,
                  }}
                />
              </SmallPosterContainer>
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <BigPosterContainer>
                  <BigPoster
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                  />
                </BigPosterContainer>
              );
            }}
          />
        </PosterContainer>

        <ForYou />
      </ScrollView>
    </Container>
  );
};
const ScrollView = styled.ScrollView``;

const SmallPosterContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;
const PosterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const BigPosterContainer = styled.View`
  flex: 1;
  padding-right: 16px;
`;

const BigPoster = styled.Image`
  height: 300px;
  width: 200px;
  border-radius: 16px;
`;
const SmallerPoster = styled.Image`
  width: 100px;
  height: 145px;
  border-radius: 16px;
`;
const GenreHeader = styled.View`
  flex: 1;
`;
const Block = styled.View<{ size?: number }>`
  height: ${(p) => p.size}px;
`;
