import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, AccountScreen, LikeScreen, ExploreScreen } from '../Index'
import IconButton from '../../Components/IconButton'
import { Colors } from '../../Components/Utils/Colors'
import DetailScreen from '../DetailScreen/DetailScreen'
import SearchScreen from '../SearchScreen/SearchScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import SeeAllSeriesScreen from '../SeeAllScreen/SeeAllSeriesScreen'
import SeeAllTrendingScreen from '../SeeAllScreen/SeeAllTrendingScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SeeAllUpComingScreen from '../SeeAllScreen/SeeAllUpComingScreen'
import type { RootStackParamList } from './NavigationTypes'
import { ScrollView } from 'react-native'
const Tab = createMaterialTopTabNavigator<RootStackParamList>()
const Stack = createNativeStackNavigator<RootStackParamList>()
function Navigation() {
    const MyTabs = () => {
        return (
            <Tab.Navigator
                tabBarPosition="bottom"
                screenOptions={{
                    tabBarPressOpacity: 0,
                    tabBarStyle: {
                        backgroundColor: Colors.LightPurple,
                    },
                    tabBarContentContainerStyle: {
                        paddingBottom: 10,
                        backgroundColor: Colors.LightPurple,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                    },
                    tabBarIndicatorStyle: { height: 0 },
                    tabBarActiveTintColor: Colors.Rose,
                    tabBarInactiveTintColor: Colors.Grey,
                    tabBarIconStyle: {
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 25,
                        borderRadius: 16,
                    },
                    tabBarLabelStyle: {
                        fontSize: 10,
                        fontWeight: 'bold',
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <IconButton
                                icon="home"
                                color={color}
                                size={24}
                                disabled
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Explore"
                    component={ExploreScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <IconButton
                                icon="compass"
                                color={color}
                                size={24}
                                disabled
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Like"
                    component={LikeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <IconButton
                                icon="heart"
                                color={color}
                                size={24}
                                disabled
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
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
        )
    }
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
                                presentation: 'transparentModal',
                                animation: 'slide_from_bottom',
                            }}
                        />
                        <Stack.Screen
                            name="SearchScreen"
                            component={SearchScreen}
                            options={{
                                presentation: 'transparentModal',
                                animation: 'fade',
                            }}
                        />
                        <Stack.Screen
                            name="SeeAllSeriesScreen"
                            component={SeeAllSeriesScreen}
                            options={{
                                presentation: 'transparentModal',
                                animation: 'fade',
                            }}
                        />
                        <Stack.Screen
                            name="SeeAllTrendingScreen"
                            component={SeeAllTrendingScreen}
                            options={{
                                presentation: 'transparentModal',
                                headerBackVisible: true,

                                headerTitle: '',
                                headerShadowVisible: false,
                                headerStyle: {
                                    backgroundColor: Colors.DarkPurple,
                                },
                                animation: 'fade',
                            }}
                        />
                        <Stack.Screen
                            name="SeeAllUpComing"
                            component={SeeAllUpComingScreen}
                            options={{
                                presentation: 'transparentModal',
                                headerBackVisible: true,
                                animation: 'fade',
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}

export default Navigation

