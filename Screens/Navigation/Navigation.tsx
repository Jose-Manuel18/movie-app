import React from "react";
import {
  CommonActions,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen, HomeScreen, LikeScreen } from "../Index";
import { ExploreScreen } from "../ExploreScreen/ExploreScreen";
import { IconButton } from "../../Components/IconButton";
import { Colors } from "../../Components/Utils/Colors";
import DetailScreen from "../DetailScreen/DetailScreen";
import SearchScreen from "../SearchScreen/SearchScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModalProvider,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import SeeAllSeriesScreen from "../SeeAllScreen/SeeAllSeriesScreen";
import SeeAllTrendingScreen from "../SeeAllScreen/SeeAllTrendingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SeeAllUpComingScreen from "../SeeAllScreen/SeeAllUpComingScreen";
import type { RootStackParamList } from "./NavigationTypes";
import { Goback } from "../../Components/Buttons/Goback";
import { Form } from "../Form/Form";
import { Login } from "../Login/Login";
import { userState } from "../../State/UserState";
import { useRecoilValue } from "recoil";
import linking from "./LinkingConfiguration";

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();
function Navigation() {
  const user = useRecoilValue(userState);

  const MyTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.LightPurple,
          },

          tabBarActiveTintColor: Colors.Rose,
          tabBarInactiveTintColor: Colors.Grey,
          tabBarIconStyle: {
            justifyContent: "center",
            alignItems: "center",
            height: 25,
            borderRadius: 16,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <IconButton icon="home" color={color} size={24} disabled />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <IconButton icon="compass" color={color} size={24} disabled />
            ),
          }}
        />
        <Tab.Screen
          name="Like"
          component={LikeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <IconButton icon="heart" color={color} size={24} disabled />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer linking={linking}>
          <Stack.Navigator>
            {user ? (
              <Stack.Group>
                <Stack.Screen
                  name="HomeTab"
                  component={MyTabs}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="DetailScreen"
                  component={DetailScreen}
                  options={{
                    headerShown: false,
                    presentation: "transparentModal",
                    animation: "fade",
                  }}
                />
                <Stack.Screen
                  name="SearchScreen"
                  component={SearchScreen}
                  options={{
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: Colors.DarkPurple,
                    },
                    presentation: "transparentModal",
                    animation: "fade",
                    headerLeft: () => <Goback />,
                  }}
                />
                <Stack.Screen
                  name="SeeAllSeriesScreen"
                  component={SeeAllSeriesScreen}
                  options={{
                    presentation: "transparentModal",
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerStyle: {
                      backgroundColor: Colors.DarkPurple,
                    },
                    animation: "slide_from_bottom",
                    headerLeft: () => <Goback />,
                  }}
                />
                <Stack.Screen
                  name="SeeAllTrendingScreen"
                  component={SeeAllTrendingScreen}
                  options={{
                    presentation: "transparentModal",
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerStyle: {
                      backgroundColor: Colors.DarkPurple,
                    },
                    animation: "slide_from_bottom",
                    headerLeft: () => <Goback />,
                  }}
                />
                <Stack.Screen
                  name="SeeAllUpComing"
                  component={SeeAllUpComingScreen}
                  options={{
                    presentation: "transparentModal",
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerStyle: {
                      backgroundColor: Colors.DarkPurple,
                    },
                    animation: "slide_from_bottom",
                    headerLeft: () => <Goback />,
                  }}
                />
                <Stack.Screen
                  name="Account"
                  component={AccountScreen}
                  options={{
                    headerShown: false,
                    presentation: "transparentModal",
                    animation: "slide_from_bottom",
                  }}
                />
              </Stack.Group>
            ) : (
              <Stack.Group>
                <Stack.Screen
                  name="Register"
                  component={Form}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{
                    headerShown: true,
                    headerLeft: () => <Goback />,
                    headerStyle: { backgroundColor: Colors.DarkPurple },
                    headerShadowVisible: false,
                    headerTitle: "",
                  }}
                />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default Navigation;
