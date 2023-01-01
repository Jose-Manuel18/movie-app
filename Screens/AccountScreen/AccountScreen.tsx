import { Button, Text } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { gql, useQuery } from "@apollo/client";
import { Loading } from "../../Components/Loading";
import { useSetRecoilState } from "recoil";
import { userState } from "../../State/UserState";

export const AccountScreen = () => {
  const { top } = useSafeAreaInsets();
  const View = styled.View`
    flex: 1;
    padding-top: ${top}px;
    background-color: ${Colors.DarkPurple};
  `;
  const resetUser = useSetRecoilState(userState);
  const ME = gql`
    query Query {
      me {
        name
        uid
        email
        id
        likes {
          title
          rating
          poster
        }
      }
    }
  `;
  const { data, loading, error, client } = useQuery(ME);
  if (error) {
    console.log(error.networkError);
  }
  if (loading) return <Loading />;
  console.log(data);
  return (
    <View>
      <Text>{data.me.name}</Text>
      <Button
        title="sign out"
        onPress={() => {
          resetUser(null);
          client.resetStore();
        }}
      />
    </View>
  );
};
