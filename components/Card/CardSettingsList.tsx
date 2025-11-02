import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ui/ThemedText";

const CardSettingsList = () => {
  return (
    <View style={styles.container}>
      <ThemedText type="title" style={{ opacity: 0.8 }}>
        Card Settings
      </ThemedText>
    </View>
  );
};

export default CardSettingsList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
