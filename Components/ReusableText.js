import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReusableText = ({ children, modo }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.texto, modo === "bigText" ? styles.bigText : styles.smallText,
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingLeft: 20,
  },
  texto: {
    color: "white",
    fontWeight: "bold",
  },
  bigText: {
    fontSize: 20,
  },
  smallText: {
    fontSize: 13,
    fontWeight: "normal",
  },
});
