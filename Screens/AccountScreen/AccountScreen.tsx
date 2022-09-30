import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Components/Utils/Colors";
const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
  flex:1,
    backgroundColor: Colors.DarkPurple,
  },
});
