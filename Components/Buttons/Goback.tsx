import { View } from "react-native";
import React from "react";
import { IconButton } from "../IconButton";
import { useNavigation } from "@react-navigation/native";
export const Goback = () => {
  const { goBack } = useNavigation();
  return (
    <View>
      <IconButton
        icon="arrow-back"
        color="white"
        size={24}
        onPress={() => goBack()}
      />
    </View>
  );
};
