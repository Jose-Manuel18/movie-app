import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, onPressFunction }) => {
  return (
    <View>
      <Pressable onPress={onPressFunction}>
        <Ionicons name={icon} size={size} color={color} />
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
