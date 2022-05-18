import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState, useEffect } from "react";
import * as Font from "expo-font";

function HomeScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Home!</Text>
        </View>
    );
}

function ExploreScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Explore!</Text>
        </View>
    );
}

function BookingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Bookings!</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Profile!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({
                    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);

    if (!appIsReady) {
        return null;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { backgroundColor: "#0C3370" },
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "white",
                    tabBarLabelStyle: {
                        fontFamily: "Montserrat-Bold",
                        fontSize: 13,
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={30}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Explore"
                    component={ExploreScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="earth"
                                color={color}
                                size={30}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Bookings"
                    component={BookingsScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="book"
                                color={color}
                                size={30}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={30}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
