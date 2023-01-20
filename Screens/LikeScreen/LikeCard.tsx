import React from "react";
import { Rating } from "react-native-rating-element";
import styled from "styled-components/native";

import { GestureResponderEvent } from "react-native";
import { Colors } from "../../Components/Utils/Colors";
import { IconButton } from "../../Components/IconButton";
import { gql, useMutation, useQuery } from "@apollo/client";
interface LikeCard {
  id: string;
  title: string;
  rating: number;
  poster: string;
  genre: string;
  overview: string;
  movie_db_id: number;
}
interface LikeCardProps {
  movie: LikeCard;
  onPress?(event: GestureResponderEvent): void;
}
const SearchCard = ({ movie, onPress }: LikeCardProps) => {
  const ME = gql`
    query Query {
      me {
        likes {
          id
          title
          rating
          poster
          overview
          movie_db_id
        }
      }
    }
  `;
  const {
    loading: loadingFeed,
    error: errorFeed,
    data: likeData,
    refetch,
  } = useQuery(ME);
  const DELETE = gql`
    mutation Mutation($movieDbId: Int!) {
      deleteLikeByUser(movie_db_id: $movieDbId) {
        id
        movie_db_id
      }
    }
  `;
  const [deleteLike, { loading, error, data }] = useMutation(DELETE);

  return (
    <CardContainer onPress={onPress}>
      <Image
        resizeMode="stretch"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster}`,
        }}
      />
      <Block width={16} />
      <TextContainer>
        <TText>{movie.title}</TText>
        <Text>{movie.genre}</Text>
        <RatingContainer>
          <Rating
            rated={movie.rating / 2}
            totalCount={5}
            ratingColor={Colors.StarColor}
            size={14}
            readonly
            icon="ios-star"
            direction="row"
          />
          <Text>{movie.rating / 2 + "/5"}</Text>
        </RatingContainer>
      </TextContainer>

      <ButtonContainer>
        <IconButton
          size={32}
          color={Colors.Rose}
          icon="close-circle"
          onPress={async () => {
            await deleteLike({
              variables: {
                movieDbId: movie.movie_db_id,
              },
            });
            refetch({ ME });
          }}
        />
      </ButtonContainer>
      <Block width={32} />
    </CardContainer>
  );
};

export default SearchCard;
const CardContainer = styled.View`
  background-color: ${Colors.LightPurple};
  flex-direction: row;
  border-radius: 16px;
  overflow: hidden;
  margin: 0px 24px;
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
const Block = styled.View<{ width?: number }>`
  width: ${(p) => p.width}px;
`;
const ButtonContainer = styled.View`
  justify-content: center;
`;
