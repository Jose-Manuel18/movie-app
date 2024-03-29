import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { IconButton } from "./IconButton";
import { Colors } from "./Utils/Colors";
import { Goback } from "./Buttons/Goback";
const SearchBar = ({
  value,
  onChangeText,
  inputRef,
}: {
  value: string;
  deleteText: () => void;
  onChangeText: (text: string) => void;
  inputRef: any;
}) => {
  const ref = () => {
    inputRef.current?.clear();
    inputRef.current?.focus();
  };
  return (
    <View style={styles.container}>
      <Goback />
      <View style={{ height: 20 }} />
      <View style={styles.searchBarOuterContainer}>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor="#ffffff"
            value={value}
            onChangeText={onChangeText}
            autoFocus={true}
            ref={inputRef}
          />
          <View style={styles.searchIconContainer}>
            <TouchableOpacity>
              <IconButton
                icon="close-sharp"
                color="#ffffff"
                size={24}
                disabled
                onPress={ref}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.spacing}></View>
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
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 1,
    backgroundColor: Colors.LightPurple,
    borderRadius: 18,
    color: Colors.TextColor,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
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
