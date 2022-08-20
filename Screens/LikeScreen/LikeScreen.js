import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
import SearchButton from "../../Components/SearchBarButton/SearchButton";
const LikeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>hola</Text>
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
    paddingTop:60,
  },
});
