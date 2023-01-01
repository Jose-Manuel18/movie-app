import { StyleSheet, Text, View, Image } from "react-native";
import { IconButton } from "../../Components/IconButton";
import { TouchableOpacity } from "react-native";
import { movieTypes } from "../../Components/Carousel/Types/types";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Loading } from "../../Components/Loading";
import { Colors } from "../../Components/Utils/Colors";
import { filter, includes, map } from "lodash";
import { GenreProps } from "../../Components/Carousel/SeriesCarousel/types";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";
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
  if (error) {
    console.log(error.message);
  }
  if (deleteError) {
    console.log(deleteError.message);
  }
  if (errorFeed) {
    console.log(errorFeed.message);
  }
  if (loading) return <Loading />;

  const allIds = map(likeData?.me?.likes, "movie_db_id");
  const filteredId = filter(allIds, (ids: any) => ids === movie.id);
  if (state === "hasError" || state === "loading") return null;
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${
                movie.poster_path || movie.poster
              }`,
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={{ width: 50 }}></View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{movie.title || movie.name}</Text>
          <Text style={styles.overviewText}>{movie.overview}</Text>
        </View>
        <TouchableOpacity
          onPress={async () => {
            includes(allIds, movie.id)
              ? await deleteLike({
                  variables: {
                    movieDbId: movie.id,
                  },
                })
              : createLike({
                  variables: {
                    data: {
                      title: movie.title || movie.name,
                      poster: movie.poster_path,
                      rating: movie.vote_average,
                      movie_db_id: movie.id,
                      genre: moviesGenres.toString(),
                    },
                  },
                });
            refetch({ ME });
          }}
          style={styles.buttonContainer}
        >
          <IconButton
            icon={includes(allIds, movie.id) ? "heart" : "heart-outline"}
            color={Colors.Rose}
            size={24}
            disabled
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: { flex: 1 },
  cardImage: {
    resizeMode: "stretch",
    width: 140,
    height: 200,
    borderRadius: 16,
  },
  textContainer: {
    flex: 2,
    flexDirection: "column",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  overviewText: {
    fontSize: 13,
    fontWeight: "normal",
    color: "#ffffff",
  },
  buttonContainer: {
    width: 25,
    height: 25,
    // backgroundColor: "#ffffff",
  },
  deleteButton: {
    backgroundColor: "white",
  },
});
