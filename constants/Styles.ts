import { Platform, StatusBar, StyleSheet } from "react-native";

const bodyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 20,
  },
});

export { bodyStyles };
