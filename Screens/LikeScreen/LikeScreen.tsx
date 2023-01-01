import { StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { gql, useQuery } from "@apollo/client";
import { Loading } from "../../Components/Loading";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { movieId, userLikes } from "../../State/UserState";
import SearchCard from "../../Components/Card/SearchCard";
import styled from "styled-components/native";
import { FlatList } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LikeCard from "./LikeCard";
import { Block } from "../../Components/Block";

export const LikeScreen = () => {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();
  const View = styled.View`
    flex: 1;
    background-color: ${Colors.DarkPurple};
    padding-top: ${top};
  `;
  const ME = gql`
    query Query {
      me {
        likes {
          id
          title
          rating
          poster
          genre
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(ME);
  if (error) return null;
  if (loading) return <Loading />;
  console.log(data);
  return (
    <View>
      <FlatList
        data={data?.me?.likes}
        ItemSeparatorComponent={() => <Block size={16} />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LikeCard
            movie={item}
            onPress={() => navigate("DetailScreen", { movieDetails: item })}
          />
        )}
      />
    </View>
  );
};
