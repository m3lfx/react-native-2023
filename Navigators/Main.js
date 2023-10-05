import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#e91e63'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Icon
                            name="home"
                            style={{ position: "relative" }}
                            color={color}
                            size={30}

                        />
                    }
                }}
            />

            <Tab.Screen
                name="Cart"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Icon
                            name="shopping-cart"
                            style={{ position: "relative" }}
                            color={color}
                            size={30}

                        />
                    }
                }}
            />

            <Tab.Screen
                name="Admin"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Icon
                            name="cog"
                            style={{ position: "relative" }}
                            color={color}
                            size={30}

                        />
                    }
                }}
            />
            <Tab.Screen
                name="User"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Icon
                            name="user"
                            style={{ position: "relative" }}
                            color={color}
                            size={30}

                        />
                    }
                }}
            />
        </Tab.Navigator>
    )
}
export default Main