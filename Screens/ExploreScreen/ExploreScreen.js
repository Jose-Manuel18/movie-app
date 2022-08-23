import { Pressable, StyleSheet, View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchButton from "../../Components/SearchBarButton/SearchButton";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValueLoadable } from "recoil";
import { GenreState } from "../../State/GenreState";
import ForYouCard from "../../Components/Card/ForYouCard";
import SearchCard from "./../../Components/Card/SearchCard";
const ExploreScreen = ({}) => {
  const { navigate } = useNavigation();
  const { state, contents } = useRecoilValueLoadable(GenreState);
  const [selected, setSelected] = useState(null);
  if (state === "hasError" || state === "loading") return null;
  const {} = useRecoilValueLoadable();
  return (
    <View style={styles.container}>
      <SearchButton />

      <View
        style={{
          height: 30,
          width: "100%",
        }}
        onTouchMove={(e) => {
          e.stopPropagation();
        }}
      >
        <FlatList
          onTouchMove={(e) => {
            e.stopPropagation();
          }}
          data={contents.genres}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <SearchCard
                movie={contents.genres}
                onPress={() =>
                  item.id === selected
                    ? setSelected(null)
                    : setSelected(item.id)
                }
                isSelected={selected === item.id}
              >
                {item.name}
              </SearchCard>
            );
          }}
        />
        <ForYouCard />
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
    paddingTop: 60,
  },
});
