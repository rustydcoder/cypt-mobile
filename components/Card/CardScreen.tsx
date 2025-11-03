import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "../ui/ThemedView";
import ATMCard from "./ATMCard";
import CardMeta from "./CardMeta";
import CardSettingsList from "./CardSettingsList";
import { cardDetails, cardMeta } from "./data";

const CardScreen = () => {
  return (
    <ThemedView style={styles.container} safe>
      <ATMCard card={cardDetails} />

      <CardMeta meta={cardMeta} />

      <CardSettingsList />
    </ThemedView>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 0,
    elevation: 2,
  },
});
