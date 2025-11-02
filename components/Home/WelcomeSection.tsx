import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "../ui/ThemedText";
import { user } from "./data";

const WelcomeSection = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <View style={styles.header}>
      <View style={styles.userOnBoarding}>
        <Image source={user.image} style={styles.userImage} />
        <ThemedText type="defaultSemiBold">Hi, {user.name}</ThemedText>
      </View>

      <Pressable onPress={() => {}}>
        {theme === "light" ? (
          <Ionicons name="add-circle-sharp" size={24} color="black" />
        ) : (
          <Ionicons name="add-circle-sharp" size={24} color="white" />
        )}
      </Pressable>
    </View>
  );
};

export default WelcomeSection;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 28,
    marginBottom: 40,
  },
  userOnBoarding: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
