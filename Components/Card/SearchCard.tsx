import React from "react";
import { Colors } from "../Utils/Colors";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { GenreState } from "../../State/GenreState";
import { Rating } from "react-native-rating-element";
import { seriesCardProps, GenreProps } from "../Carousel/SeriesCarousel/types";
import styled from "styled-components/native";
import { Genre } from "../../State/UserState";
const SearchCard = ({ movie, onPress }: seriesCardProps) => {
  const setGenre = useSetRecoilState(Genre);
  const { state, contents } = useRecoilValueLoadable(GenreState);
  if (state === "hasError" || state === "loading") return null;
  const GenreList: GenreProps[] = contents.genres;
  const currentGenre: GenreProps[] = GenreList.filter((genre) =>
    movie?.genre_ids?.includes(genre.id),
  );

  return (
    <CardContainer onPress={onPress}>
      <Image
        resizeMode="stretch"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />
      <Block width={16} />
      <TextContainer>
        <TText>{movie.title}</TText>
        <Text>
          {(currentGenre || []).map((genre) => genre.name).join(", ")}.
        </Text>
        <RatingContainer>
          <Rating
            rated={movie.vote_average / 2}
            totalCount={5}
            ratingColor={Colors.StarColor}
            size={14}
            readonly
            icon="ios-star"
            direction="row"
          />
          <Text>{movie.vote_average / 2 + "/5"}</Text>
        </RatingContainer>
      </TextContainer>
    </CardContainer>
  );
};

export default SearchCard;
const CardContainer = styled.TouchableOpacity`
  background-color: ${Colors.LightPurple};
  flex-direction: row;
  border-radius: 16px;
  overflow: hidden;
  margin: 0px 24px;

  /* box-shadow: 0px 6px 5px 4px black; */
`;
const Image = styled.Image`
  width: 80px;
  height: 110px;
`;
const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
const RatingContainer = styled.View`
  flex-direction: row;
`;
const TText = styled.Text`
  color: white;
  font-weight: bold;
`;
const Text = styled.Text`
  color: white;
`;
const Block = styled.View<{ width: number }>`
  width: ${(p) => p.width}px;
`;
