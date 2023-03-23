import { take } from "lodash";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRecoilValueLoadable } from "recoil";
import styled from "styled-components/native";
import { Colors } from "../../Components/Utils/Colors";
import { GenreState } from "../../State/GenreState";
import { NowPlayingState } from "../../State/NowPlayingState";

export const GenreList = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const { state: genreState, contents: genreContents } =
    useRecoilValueLoadable(GenreState);
  const { state, contents } = useRecoilValueLoadable(NowPlayingState);
  const currentMovie = contents?.results?.filter(
    (movies: { genre_ids: (string | null)[] }) =>
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
    <>
      <FlatList
        data={genreContents.genres}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.Container}>
              <TouchableOpacity
                onPress={() =>
                  item.id === selected
                    ? setSelected(null)
                    : setSelected(item.id)
                }
              >
                <Text
                  style={[
                    item.id === selected ? styles.ButtonSelected : null,
                    styles.Button,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <Block size={16} />
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
    </>
  );
};
const theme = {
  main: Colors.Rose,
};
const ButtonSelected = styled.Text<{ color: string | null }>`
  background-color: ${(p) => p.color};
  color: white;
  padding: 8px;
  height: 100%;
  justify-content: center;
  align-items: center;
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
const SmallPosterContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const styles = StyleSheet.create({
  Container: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  ButtonSelected: {
    backgroundColor: Colors.Rose,
  },
  Button: {
    color: "white",
    padding: 8,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
const Block = styled.View<{ size?: number }>`
  height: ${(p) => p.size}px;
`;
