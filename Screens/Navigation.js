import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import LikeScreen from "./LikeScreen/LikeScreen";
import AccountScreen from "./AccountScreen/AccountScreen";
import IconButton from "../Components/IconButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../Components/Utils/Colors";
import DetailScreen from "./DetailScreen/DetailScreen";
import SearchScreen from "./SearchScreen/SearchScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import SeeAllSeriesScreen from "./SeeAllScreen/SeeAllSeriesScreen";
import SeeAllTrendingScreen from "./SeeAllScreen/SeeAllTrendingScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SeeAllUpComing from "./SeeAllScreen/SeeAllUpComing";
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const MyTabs = () => {
    return (
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={{
          tabBarContentContainerStyle: {
            backgroundColor: Colors.LightPurple,
            borderRadius: 17,
          },
          tabBarIndicatorStyle: { height: 0 },
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
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <IconButton icon="home" color={color} size={24} disabled />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <IconButton icon="compass" color={color} size={24} disabled />
            ),
          }}
        />
        <Tab.Screen
          name="Like"
          component={LikeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <IconButton icon="heart" color={color} size={24} disabled />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <IconButton
                icon="person-sharp"
                color={color}
                size={24}
                disabled
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Stack.Navigator>
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
                animation: "slide_from_bottom",
              }}
            />
            <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={{
                headerShown: false,
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="SeeAllSeriesScreen"
              component={SeeAllSeriesScreen}
              options={{
                headerShown: true,
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="SeeAllTrendingScreen"
              component={SeeAllTrendingScreen}
              options={{
                headerShown: true,
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="SeeAllUpComing"
              component={SeeAllUpComing}
              options={{
                headerShown: true,
                presentation: "transparentModal",
                animation: "fade",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
