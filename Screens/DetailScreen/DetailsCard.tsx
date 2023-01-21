import { IconButton } from "../../Components/IconButton";
import { movieTypes } from "../../Components/Carousel/Types/types";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Colors } from "../../Components/Utils/Colors";
import { includes, map } from "lodash";
import { GenreProps } from "../../Components/Carousel/SeriesCarousel/types";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";
import styled from "styled-components/native";
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
        id
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
  const { error: errorFeed, data: likeData } = useQuery(ME);
  const FEED = gql`
    query Query($userId: ID) {
      likeById(userId: $userId) {
        title
        id
        rating
        poster
        overview
        movie_db_id
        genre
      }
    }
  `;
  const { client } = useQuery(FEED, {
    variables: {
      userId: likeData?.me?.id,
    },
  });
  const DELETE = gql`
    mutation Mutation($movieDbId: Int!) {
      deleteLikeByUser(movie_db_id: $movieDbId) {
        title
        id
        movie_db_id
      }
    }
  `;
  const [deleteLike, { error: deleteError }] = useMutation(DELETE, {
    refetchQueries: [{ query: FEED }],
  });

  const [createLike, { error }] = useMutation(LIKE, {
    refetchQueries: [{ query: FEED }],
  });

  const allIds = map(likeData?.me?.likes, "movie_db_id");
  // const filteredId = filter(
  //   allIds,
  //   (ids: number) => ids === movie.id || movie.movie_db_id,
  // );
  if (error) return null;
  if (deleteError) return null;
  if (errorFeed) return null;
  if (state === "hasError" || state === "loading") return null;

  return (
    <Container>
      <RowContainer>
        <Poster
          source={{
            uri: `https://image.tmdb.org/t/p/w500${
              movie.poster_path || movie.poster
            }`,
          }}
        />
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
          await client.refetchQueries({
            include: [FEED],
          });
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
