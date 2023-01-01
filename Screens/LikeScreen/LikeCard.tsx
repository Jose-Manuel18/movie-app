import React from "react";
import { Rating } from "react-native-rating-element";
import styled from "styled-components/native";
import CardView from "react-native-cardview";
import { Block } from "../../Components/Block";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { GestureResponderEvent } from "react-native";
import { Colors } from "../../Components/Utils/Colors";
interface LikeCard {
  title: String;
  genre: String;
  rating: Float;
  poster: String;
}
interface LikeCardProps {
  movie: LikeCard;
  onPress?(event: GestureResponderEvent): void;
}
const SearchCard = ({ movie, onPress }: LikeCardProps) => {
  return (
    <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={16}>
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
      </CardContainer>
    </CardView>
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
