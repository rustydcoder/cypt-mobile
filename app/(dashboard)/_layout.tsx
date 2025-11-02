import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const DashboardLayout = () => {
  const navBackground = useThemeColor({}, "background");
  const tabIconDefault = useThemeColor({}, "tabIconDefault");
  const tabIconSelected = useThemeColor({}, "tabIconSelected");

  return (
    <View>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: navBackground,
            paddingTop: 10,
            height: 90,
          },
          tabBarActiveTintColor: tabIconSelected,
          tabBarInactiveTintColor: tabIconDefault,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "home" : "home-outline"}
                //  color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="cards"
          options={{
            title: "Cards",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "card" : "card-outline"}
                //  color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
