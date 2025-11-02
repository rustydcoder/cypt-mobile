import { ThemedView } from "@/components/ui/ThemedView";
import React from "react";
import { StyleSheet, Text } from "react-native";

const home = () => {
  return (
    <ThemedView safe style={styles.container}>
      <Text>home</Text>
    </ThemedView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
