import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
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
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { backgroundColor: "#0C3370" },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color={"white"}
                                size={30}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Explore"
                    component={ExploreScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="earth"
                                color={"white"}
                                size={30}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Bookings"
                    component={BookingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="book"
                                color={"white"}
                                size={30}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account"
                                color={"white"}
                                size={30}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
