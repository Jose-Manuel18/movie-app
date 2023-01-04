import React, { useCallback, useMemo, useRef } from "react";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useSetRecoilState } from "recoil";

import styled from "styled-components/native";
import { gql, useQuery } from "@apollo/client";

import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { userState } from "../../State/UserState";
import { Colors } from "../../Components/Utils/Colors";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AccountComponent } from "./AccountComponent";
import { Goback } from "../../Components/Buttons/Goback";

export function AccountScreen() {
  const { goBack } = useNavigation();

  // // ref
  // const bottomSheetRef = useRef<BottomSheet>(null);

  // // variables
  // const snapPoints = useMemo(() => ["35%"], []);

  // // callbacks
  // const handleSheetChanges = useCallback((index: number) => {
  //   bottomSheetRef.current?.snapToIndex(index);
  // }, []);

  // // renders

  // const resetUser = useSetRecoilState(userState);
  // const ME = gql`
  //   query Query {
  //     me {
  //       name
  //       uid
  //       email
  //       id
  //       likes {
  //         title
  //         rating
  //         poster
  //       }
  //     }
  //   }
  // `;
  // const { data, loading, error, client } = useQuery(ME);
  // if (error) {
  //   console.log(error.networkError);
  // }
  // if (loading) return null;
  // console.log(data.me);
  // return (
  //   <Container intensity={8}>
  //     <BottomSheet
  //       ref={bottomSheetRef}
  //       onClose={() => goBack()}
  //       enablePanDownToClose={true}
  //       enableOverDrag={false}
  //       snapPoints={snapPoints}
  //       onChange={handleSheetChanges}
  //       backdropComponent={() => <OnTapClose onPress={() => goBack()} />}
  //     >
  //       <InnerContainer>
  //         <Text>{data.me.name}</Text>
  //         <Text>{data.me.email}</Text>
  //         <SignOut
  //         // onPress={() => {
  //         //   resetUser(null);
  //         //   client.resetStore();
  //         // }}
  //         >
  //           <Text>hola</Text>
  //         </SignOut>
  //       </InnerContainer>
  //     </BottomSheet>
  //   </Container>
  // );
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["20%"], []);

  // callbacks
  const handleSheetChange = useCallback((index: any) => {
    console.log("handleSheetChange", index);
  }, []);

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
  if (loading) return null;
  console.log(data.me);
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        enablePanDownToClose={true}
        backdropComponent={() => (
          <TouchableOpacity style={{ flex: 1 }} onPress={() => goBack()} />
        )}
      >
        <BottomSheetView style={styles.bottomSheetContainer}>
          <Text style={styles.userText}>{data.me.name}</Text>
          <Text style={styles.userText}>{data.me.email}</Text>
          <TouchableOpacity
            style={styles.signOut}
            onPress={() => {
              resetUser(null);
              client.resetStore();
            }}
          >
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: Colors.LightPurple,
    padding: 16,
  },
  signOut: {
    backgroundColor: Colors.Rose,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 16,
  },
  signOutText: {
    color: "white",
    fontWeight: "bold",
  },
  userText: {
    color: "white",
  },
});

// const Container = styled(BlurView)`
//   flex: 1;
//   padding: 24px;
//   background-color: transparent;
// `;
// const InnerContainer = styled.View`
//   flex: 1;
//   align-items: center;
//   background-color: ${Colors.LightPurple};
// `;
// const OnTapClose = styled.TouchableOpacity`
//   flex: 1;
// `;

// const Text = styled.Text`
//   color: black;
// `;
const SignOut = styled.View`
  flex: 1;
  background-color: black;
`;
