import React from "react";
import { StyleSheet } from "react-native";
import TransactionList from "../TransactionList";
import { ThemedView } from "../ui/ThemedView";
import AccountInfo from "./AccountInfo";
import WelcomeSection from "./WelcomeSection";
import { transactions } from "./data";

const HomeScreen = () => {
  return (
    <ThemedView style={styles.container} safe>
      <WelcomeSection />
      <AccountInfo />
      <TransactionList transactions={transactions} />
    </ThemedView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
