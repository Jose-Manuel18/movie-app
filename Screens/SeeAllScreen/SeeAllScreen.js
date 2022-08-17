import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";

function SeeAllScreen() {
  return (
    <View style={styles.container}>
      <Text>SeeAllScreen</Text>
    </View>
  );
}

export default SeeAllScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DarkPurple,
  },
});
