import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { HStack, Spacer } from "react-native-stacks";
import { Colors } from "../Utils/Colors";
import IconButton from "../IconButton";
import { useNavigation } from "@react-navigation/native";

const SearchButton = () => {
  const { navigate } = useNavigation();

  return (
    <HStack style={styles.container}>
      <TouchableOpacity onPress={() => navigate("SearchScreen")}>
        <View style={styles.searchContainer}>
          <Text style={styles.text}>Search</Text>
          <View style={styles.searchButton}>
            <IconButton
              icon="ios-search-sharp"
              color={Colors.TextColor}
              size={16}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.filterContainer}>
        <IconButton icon="filter-sharp" color={Colors.TextColor} size={24} />
      </View>
    </HStack>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  searchContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    flex: 6,
    height: 50,
    backgroundColor: Colors.LightPurple,
    justifyContent: "space-between",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 0,
  },
  text: {
    color: Colors.TextColor,
    marginLeft: 12,
  },
  searchButton: {
    paddingLeft: 210,
    marginRight: 12,
  },
  filterContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    flex: 1,
    backgroundColor: Colors.LightPurple,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    minWidth: 2,
    marginLeft: 16,
    height: 50,
  },
});
