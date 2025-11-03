import { useThemeColor } from "@/hooks/useThemeColor";
import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ui/ThemedText";
import { ThemedView } from "../ui/ThemedView";
import MoreList from "./MoreList";

const ProfileImage = require("../../assets/images/demo/user.png");
const Username = "Damilola Odunayo";

const MoreScreen = () => {
  const backgroundColor = useThemeColor(
    {
      dark: "#1A1A1A",
      light: "#E8E8E8",
    },
    "background"
  );

  const subtitleColor = useThemeColor(
    {
      light: "#ccc",
      dark: "#999",
    },
    "text"
  );

  const boxBackgroundColor = useThemeColor({}, "background");

  return (
    <ThemedView style={[styles.container, { backgroundColor }]} safe>
      <Pressable
        style={{ width: "100%", marginBottom: 48 }}
        onPress={() => console.log("view profile")}
      >
        <View style={[styles.box, { backgroundColor: boxBackgroundColor }]}>
          <Image source={ProfileImage} style={styles.image} />

          <View style={{ marginLeft: 20 }}>
            <ThemedText style={{ fontWeight: "800", fontSize: 20 }}>
              {Username}
            </ThemedText>
            <ThemedText
              type="subtitle"
              style={{ marginTop: 2, fontSize: 18, color: subtitleColor }}
            >
              Account details
            </ThemedText>
          </View>
        </View>
      </Pressable>

      <MoreList />

      <View style={{ flex: 1 }}>
        <Pressable onPress={() => console.log("sign out")}>
          <ThemedText
            type="title"
            style={{ fontSize: 20, fontWeight: "800", color: "#D32F2F" }}
          >
            Sign Out
          </ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  box: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
