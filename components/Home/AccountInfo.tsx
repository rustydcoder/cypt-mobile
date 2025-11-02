import { ThemedText } from "@/app-example/components/ThemedText";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import DisplayCard from "../ui/DisplayCard";
import { accountInfo } from "./data";

const AccountInfo = () => {
  const renderItem = ({ item }: { item: { title: string; icon?: string } }) => {
    let iconComponent: React.ReactNode;
    switch (item.icon) {
      case "bank":
        iconComponent = (
          <FontAwesome name={item.icon} size={24} color="white" />
        );
        break;
      case "savings":
        iconComponent = (
          <MaterialIcons name={item.icon} size={24} color="white" />
        );
        break;
      default:
        iconComponent = (
          <Ionicons name="eye-off-sharp" size={24} color="white" />
        );
        break;
    }

    return (
      <Pressable
        onPress={() => console.log(`Pressed: ${item.title}`)}
        style={({ pressed }) => [
          styles.itemContainer,
          pressed ? styles.itemPressed : styles.itemNormal,
        ]}
      >
        <View style={styles.itemContent}>
          {iconComponent}
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
          $50,000
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
