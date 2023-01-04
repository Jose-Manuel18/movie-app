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

import { FlatList } from "react-native";
import FilterTextCard from "../../Components/Card/FilteredText/FilterTextCard";
import { Loading } from "../../Components/Loading";
export const ExploreScreen = () => {
  const { top } = useSafeAreaInsets();
  const View = styled.View`
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

  // if (state === "hasError" || genreState === "hasError") return null;
  // if (state === "loading" || genreState === "loading") return <Loading />;
  return (
    <View>
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
        <BiggerPosterContainer>
          <BigPoster
            source={{
              uri:
                selected === null
                  ? `https://image.tmdb.org/t/p/w500${contents?.results[0]?.poster_path}`
                  : `https://image.tmdb.org/t/p/w500${currentMovie[0]?.poster_path}`,
            }}
          />
          <OuterContainer>
            <MiddleContainer>
              <SmallerPoster
                source={{
                  uri:
                    selected === null
                      ? `https://image.tmdb.org/t/p/w500${contents?.results[1]?.poster_path}`
                      : `https://image.tmdb.org/t/p/w500${currentMovie[1]?.poster_path}`,
                }}
              />
            </MiddleContainer>
            <SmallPosterContainer>
              <SmallerPoster
                source={{
                  uri:
                    selected === null
                      ? `https://image.tmdb.org/t/p/w500${contents?.results[2]?.poster_path}`
                      : `https://image.tmdb.org/t/p/w500${currentMovie[2]?.poster_path}`,
                }}
              />
            </SmallPosterContainer>
          </OuterContainer>
        </BiggerPosterContainer>
        <ForYou />
      </ScrollView>
    </View>
  );
};
const ScrollView = styled.ScrollView``;

const BiggerPosterContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: row;
  max-height: 300px;
  padding: 0px 32px;
  /* background-color: white; */
`;
const OuterContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;
const SmallPosterContainer = styled.View`
  flex: 1;
  padding: 8px 8px;
`;
const MiddleContainer = styled.View`
  flex: 1;
  padding: 8px 8px;
`;
const BigPoster = styled.Image`
  height: 300px;
  width: 200px;
  border-radius: 16px;
`;
const SmallerPoster = styled.Image`
  width: 100px;
  height: 138px;
  border-radius: 16px;
`;
const GenreHeader = styled.View`
  flex: 1;
`;
const Block = styled.View<{ size?: number; width?: number; flex?: boolean }>`
  height: ${(p) => p.size}px;
`;
