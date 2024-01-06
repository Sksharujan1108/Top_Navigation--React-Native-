import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChartScreen from "../../Screens/ChatScreen";
import ContactScreen from "../../Screens/ContactScreens";
import AlbumScreen from "../../Screens/AlbumScreens";

const Tab = createMaterialTopTabNavigator();

const ToptabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, fontWeight: "bold" },
        tabBarItemStyle: { width: 140 },
        tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen name="Chart" component={ChartScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};

export default ToptabsNavigation;

const styles = StyleSheet.create({});
