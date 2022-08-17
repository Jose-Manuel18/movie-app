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



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const MyTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.Rose,
          tabBarInactiveTintColor: Colors.Grey,
          headerBackground: Colors.LightPurple,
          tabBarStyle: {
            position: "absolute",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            backgroundColor: Colors.TabBarColor,
            // height:56,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIconStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <IconButton icon="home" color={color} size={size} />
            ),
            tabBarIconStyle: {
              textAlign: "center",
            },
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <IconButton icon="compass" color={color} size={size} />
            ),
            tabBarIconStyle: {
              paddingLeft: 8,
            },
          }}
        />
        <Tab.Screen
          name="Like"
          component={LikeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <IconButton icon="heart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <IconButton icon="person-sharp" color={color} size={size} />
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
                presentation:"transparentModal"
              }}
            />
            <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={{
                headerShown: false,
                presentation:"transparentModal"
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
