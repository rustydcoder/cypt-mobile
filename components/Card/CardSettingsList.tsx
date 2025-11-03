import React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import ATMCardIcon from "../icons/ATMCardIcon";
import ATMCardOutlineIcon from "../icons/ATMCardOutlineIcon";
import DollarSymbolIcon from "../icons/DollarSymbolIcon";
import LockedWithKeyIcon from "../icons/LockedWithKeyIcon";
import { ThemedText } from "../ui/ThemedText";

type SettingsItem = {
  id: string;
  label: string;
  Icon: ({ color }: { color: string }) => React.JSX.Element;
};

const settingsData: SettingsItem[] = [
  {
    id: "1",
    label: "Online Payment",
    Icon: ({ color }: { color: string }) => <DollarSymbolIcon color={color} />,
  },
  {
    id: "2",
    label: "ATM Withdrawals",
    Icon: ({ color }: { color: string }) => <ATMCardIcon color={color} />,
  },
  {
    id: "3",
    label: "Contactless Payment",
    Icon: ({ color }: { color: string }) => (
      <ATMCardOutlineIcon color={color} />
    ),
  },
  {
    id: "4",
    label: "Block Card",
    Icon: ({ color }: { color: string }) => <LockedWithKeyIcon color={color} />,
  },
  {
    id: "5",
    label: "Change dollar to naira",
    Icon: ({ color }: { color: string }) => <DollarSymbolIcon color={color} />,
  },
];

const CardSettingsList = () => {
  const theme = useColorScheme() ?? "light";

  const renderSettingsItem = ({ item }: { item: SettingsItem }) => {
    return (
      <Pressable
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 18,
        }}
      >
        <item.Icon color={theme === "light" ? "#000" : "#fff"} />
        <ThemedText style={{ marginLeft: 12, fontSize: 16, opacity: 0.8 }}>
          {item.label}
        </ThemedText>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <ThemedText type="title" style={{ opacity: 0.7, marginBottom: 12 }}>
        Card Settings
      </ThemedText>

      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.id}
        renderItem={renderSettingsItem}
      />
    </View>
  );
};

export default CardSettingsList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
  },
});
