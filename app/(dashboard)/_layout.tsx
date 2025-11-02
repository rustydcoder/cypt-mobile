import { useThemeColor } from "@/hooks/useThemeColor";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const DashboardLayout = () => {
  const navBackground = useThemeColor({}, "background");
  const tabIconDefault = useThemeColor({}, "tabIconDefault");
  const tabIconSelected = useThemeColor({}, "tabIconSelected");

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: navBackground,
          paddingTop: 10,
          height: 90,
          borderTopWidth: 1,
          borderTopColor: tabIconDefault,
        },
        tabBarActiveTintColor: tabIconSelected,
        tabBarInactiveTintColor: tabIconDefault,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "home" : "home-outline"}
              color={focused ? tabIconSelected : tabIconDefault}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          headerTitle: "Cards Details",
          headerShown: true,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "800",
            color: "#00C853",
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "card" : "card-outline"}
              color={focused ? tabIconSelected : tabIconDefault}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              size={24}
              name="swap"
              color={focused ? tabIconSelected : tabIconDefault}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "menu" : "menu-outline"}
              color={focused ? tabIconSelected : tabIconDefault}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
