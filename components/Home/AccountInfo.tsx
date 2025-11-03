import { ThemedText } from "@/app-example/components/ThemedText";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import DisplayCard from "../ui/DisplayCard";
import { accountInfo } from "./data";

const IconComponent = ({ icon, hide }: { icon?: string; hide?: boolean }) => {
  switch (icon) {
    case "bank":
      return <FontAwesome name={icon} size={24} color="white" />;
    case "savings":
      return <MaterialIcons name={icon} size={24} color="white" />;
    default:
      return (
        <Ionicons
          name={hide ? "eye-off-sharp" : "eye-sharp"}
          size={24}
          color="white"
        />
      );
  }
};

const AccountInfo = () => {
  const [hideBalance, setHideBalance] = useState(false);

  const toggleHideBalance = () => setHideBalance((prev) => !prev);

  const renderItem = ({ item }: { item: { title: string; icon?: string } }) => {
    return (
      <Pressable
        onPress={() => {
          if (item.icon === "balance") {
            toggleHideBalance();
          }
        }}
        style={({ pressed }) => [
          styles.itemContainer,
          pressed ? styles.itemPressed : styles.itemNormal,
        ]}
      >
        <View style={styles.itemContent}>
          <IconComponent icon={item.icon} hide={hideBalance} />
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <DisplayCard style={styles.card}>
      <View style={styles.headerContainer}>
        <ThemedText type="title" style={{ fontSize: 18, color: "white" }}>
          Account Balance
        </ThemedText>
        <ThemedText
          type="title"
          style={{ marginTop: 12, fontSize: 20, color: "white" }}
        >
          {!hideBalance ? "$50,000" : "****"}
        </ThemedText>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={accountInfo}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          scrollEnabled={false}
        />
      </View>
    </DisplayCard>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    marginTop: 12,
  },
  flatListContent: {
    paddingHorizontal: 16,
    flexGrow: 1,
    justifyContent: "center",
  },
  itemContainer: {
    padding: 12,
    alignItems: "center",
    marginHorizontal: 8,
  },
  itemPressed: {
    opacity: 0.7,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  itemNormal: {
    opacity: 1,
  },
  itemContent: {
    alignItems: "center",
  },
  itemText: {
    marginTop: 8,
    fontSize: 15,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});
