import React from "react";
import { Colors } from "../../Components/Utils/Colors";

import { gql, useQuery } from "@apollo/client";
import { Loading } from "../../Components/Loading";
import styled from "styled-components/native";
import { FlatList } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LikeCard from "./LikeCard";

export const LikeScreen = () => {
  const { top } = useSafeAreaInsets();
  const View = styled.View`
    flex: 1;
    background-color: ${Colors.DarkPurple};
    padding-top: ${top};
  `;
  const ME = gql`
    query Query {
      me {
        id
        likes {
          id
          title
          rating
          poster
          genre
          overview
          movie_db_id
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(ME);

  const feed = gql`
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
  const { data: feedData } = useQuery(feed, {
    variables: {
      userId: data?.me?.id,
    },
  });
  if (error) return null;
  if (loading) return <Loading />;
  return (
    <View>
      <FlatList
        data={feedData?.likeById}
        ItemSeparatorComponent={() => <Block size={16} />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LikeCard movie={item} />}
      />
    </View>
  );
};
const Block = styled.View<{ size?: number }>`
  height: ${(p) => p.size}px;
`;
