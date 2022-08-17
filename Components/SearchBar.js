import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "./Utils/Colors";

const SearchBar = ({ value, onChangeText }) => {
  const {navigate} = useNavigation();
  const searchButton = () => {
    console.log("Pressed!");
  };
  const FilterButton = () => {
    console.log("Pressed!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarOuterContainer}>
        <View style={styles.searchBarContainer}>
          <View style={styles.textInputContainer}>
            
              <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.textInput}
                placeholder="Search"
                placeholderTextColor="#ffffff"
                autoFocus={true}
              />
          </View>
          <View style={styles.searchIconContainer}>
            <IconButton
              icon="ios-search-sharp"
              color="#ffffff"
              size={16}
              onPressFunction={searchButton}
            />
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.filterContainer}>
            <IconButton
              icon="filter-sharp"
              color="#ffffff"
              size={24}
              onPressFunction={FilterButton}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"grey",
    marginHorizontal: 10,
    marginBottom: 10,
    maxHeight: 50,
  },
  searchBarOuterContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    // maxWidth: 210,
    paddingLeft: 12,
    width: 270,
    fontWeight: "bold",
    alignContent: "center",
    color: Colors.TextColor,
  },
  textInputContainer: {
    justifyContent: "center",
  },
  searchBarContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    marginLeft: 10,
    backgroundColor: Colors.LightPurple,
    borderRadius: 18,
    color: Colors.TextColor,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    height: 50,
    width: 44,
    marginLeft: 18,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.LightPurple,
    borderRadius: 14,
  },
  searchIconContainer: {
    justifyContent: "center",
    alignContent: "center",
    paddingRight: 12,
  },
});
