import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "./NavigationTypes";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      HomeTab: {
        screens: {
          HomeScreen: "home",
          LikeScreen: "likes",
          AccountScreen: "account",
          ExploreScreen: "explorer-movies",
        },
      },
    },
  },
};

export default linking;
