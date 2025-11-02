import { Image } from "expo-image";
import React, { useCallback, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { Transaction } from "./Home/data";
import { ThemedText } from "./ui/ThemedText";
import { ThemedView } from "./ui/ThemedView";

type History = {
  id: string;
  name: string;
  imageUrl: string;
  amount: number;
  currency: string;
  type: "credit" | "debit";
  description?: string;
};

type TransactionListProps = {
  transactions: Transaction[];
};

const TransactionList = ({ transactions }: TransactionListProps) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderTransactionHistory = ({ item }: { item: History }) => {
    return (
      <View style={styles.transactionRow}>
        <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <ThemedText style={styles.name}>{item.name}</ThemedText>
        </View>
        <Text
          style={[
            styles.amount,
            { color: item.type === "credit" ? "#00C853" : "#D32F2F" },
          ]}
        >
          {item.type === "credit" ? "+" : "-"}
          {item.currency}
          {item.amount.toLocaleString()}
        </Text>
      </View>
    );
  };

  const renderDateGroup = ({ item }: { item: Transaction }) => {
    return (
      <View
        style={{
          marginBottom: 16,
          width: "100%",
        }}
      >
        <ThemedText style={styles.dateText}>{item.date}</ThemedText>
        <FlatList
          data={item.history}
          keyExtractor={(historyItem) => historyItem.id}
          renderItem={({ item }) => renderTransactionHistory({ item })}
          contentContainerStyle={styles.transactionContainer}
        />
      </View>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderDateGroup}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.dateGroupContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#000"
            titleColor="#000"
            colors={["#000"]}
          />
        }
      />
    </ThemedView>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
  },
  dateGroupContainer: {
    paddingBottom: 16,
  },
  dateText: {
    opacity: 0.6,
    marginBottom: 12,
    fontWeight: "500",
    fontSize: 14,
  },
  transactionContainer: {
    gap: 8,
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    //  backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    //  borderRadius: 12,
    padding: 12,
    marginHorizontal: 2,
    //  shadowColor: "#000",
    //  shadowOffset: {
    //    width: 0,
    //    height: 1,
    //  },
    //  shadowOpacity: 0.1,
    //  shadowRadius: 2,
    //  elevation: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 4,
  },
  amount: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: "auto",
  },
});
