import { IconButton } from "../../Components/IconButton";
import { movieTypes } from "../../Components/Carousel/Types/types";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Colors } from "../../Components/Utils/Colors";
import { includes, map } from "lodash";
import { GenreProps } from "../../Components/Carousel/SeriesCarousel/types";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";
import styled from "styled-components/native";
import CardView from "react-native-cardview";
import { filter } from "lodash";
const DetailsCard = ({ movie }: { movie: movieTypes }) => {
  const { state, contents } = useRecoilValueLoadable(GenreState);

  const currentGenre: GenreProps[] = contents?.genres?.filter(
    (genre: { id: number }) => movie?.genre_ids?.includes(genre.id),
  );
  const moviesGenres = (currentGenre || [])
    .map((genre) => genre?.name)
    .join(", ");
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
  const LIKE = gql`
    mutation Mutation($data: LikeCreateInput) {
      likeByUser(data: $data) {
        id
        title
        rating
        poster
        genre
        overview
        movie_db_id
      }
    }
  `;
  const DELETE = gql`
    mutation Mutation($movieDbId: Int!) {
      deleteLikeByUser(movie_db_id: $movieDbId) {
        title
        id
        movie_db_id
      }
    }
  `;
  const [
    deleteLike,
    { loading: deleteLoading, error: deleteError, data: deleteLikeData },
  ] = useMutation(DELETE);
  const {
    loading: loadingFeed,
    error: errorFeed,
    data: likeData,
    refetch,
  } = useQuery(ME);
  const [createLike, { loading, error, data }] = useMutation(LIKE);
  if (error) console.log(error);
  if (deleteError) return null;
  if (errorFeed) return null;

  const allIds = map(likeData?.me?.likes, "movie_db_id");
  const filteredId = filter(
    allIds,
    (ids: number) => ids === movie.id || movie.movie_db_id,
  );
  if (state === "hasError" || state === "loading") return null;

  return (
    <Container>
      <RowContainer>
        <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={16}>
          <Poster
            source={{
              uri: `https://image.tmdb.org/t/p/w500${
                movie.poster_path || movie.poster
              }`,
            }}
          />
        </CardView>
        <BlockX width={16} />
        <ColumnContainer>
          <Title>{movie.title || movie.name}</Title>
          <BlockY size={8} />
          <Overview>{movie.overview}</Overview>
        </ColumnContainer>
      </RowContainer>
      <BlockY size={16} />
      <AddLike
        onPress={async () => {
          includes(allIds, movie.id)
            ? await deleteLike({
                variables: {
                  movieDbId: movie.id,
                },
              })
            : await createLike({
                variables: {
                  data: {
                    title: movie.title || movie.name,
                    poster: movie.poster_path,
                    rating: movie.vote_average,
                    movie_db_id: movie.id,
                    overview: movie.overview,
                    genre: moviesGenres.toString(),
                  },
                },
              });
          refetch({ ME });
        }}
      >
        <IconButton
          icon={
            includes(allIds, movie.id || movie.movie_db_id)
              ? "heart-dislike"
              : "heart"
          }
          color="black"
          size={24}
        />
        <BlockX width={8} />
        <LikeText>
          {includes(allIds, movie.id) ? "Remove from Likes" : "Add to Likes"}
        </LikeText>
      </AddLike>
    </Container>
  );
};

export default DetailsCard;
const Container = styled.View`
  flex: 1;
  padding: 0px 16px;
`;

const Poster = styled.Image`
  width: 140px;
  height: 200px;
  border-radius: 16px;
  border-width: 2px;
`;
const Title = styled.Text`
  color: ${Colors.TextColor};
  font-size: 18px;
  font-weight: bold;
`;
const RowContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;
const Overview = styled.Text`
  color: ${Colors.TextColor};
`;
const ColumnContainer = styled.ScrollView`
  flex-direction: column;
  flex: 1;
`;

const AddLike = styled.TouchableOpacity`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.Rose};
  border-radius: 32px;
  height: 32px;
`;
const LikeText = styled.Text`
  color: black;
  font-weight: bold;
`;
const BlockY = styled.View<{ size?: number }>`
  height: ${(p) => p.size}px;
`;
const BlockX = styled.View<{ width?: number }>`
  height: ${(p) => p.width}px;
`;
