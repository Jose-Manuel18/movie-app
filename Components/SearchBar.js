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

const SearchBar = ({ value, onChangeText, deleteText, inputRef }) => {
  const { navigate } = useNavigation();
  function closeButton() {
    inputRef.current.clear();
    inputRef.current.focus();
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBarOuterContainer}>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor="#ffffff"
            value={value}
            onChangeText={onChangeText}
            clearTextOnFocus={true}
            autoFocus={true}
            ref={inputRef}
          />
          <View style={styles.searchIconContainer}>
            <TouchableOpacity
            // onPress={() => inputRef.current.clear()}
            >
              <IconButton
                icon="close-sharp"
                color="#ffffff"
                size={24}
                onPress={closeButton}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.spacing}></View>
        <TouchableOpacity>
          <View style={styles.filterContainer}>
            <IconButton icon="filter-sharp" color="#ffffff" size={24} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  searchBarOuterContainer: {
    flexDirection: "row",
  },
  searchBarContainer: {
    flex: 1,
    paddingHorizontal: 14.5,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: Colors.LightPurple,
    borderRadius: 18,
    color: Colors.TextColor,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    color: Colors.TextColor,
  },

  searchIconContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  spacing: {
    width: 15,
  },
  filterContainer: {
    padding: 12,
    paddingLeft: 11,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    width: 46,
    backgroundColor: Colors.LightPurple,
    borderRadius: 14,
  },
});
