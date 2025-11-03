import { useThemeColor } from "@/hooks/useThemeColor";
import {
  Entypo,
  FontAwesome6,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type ItemType = {
  id: string;
  label: string;
  Icon: ({ color }: { color: string }) => React.JSX.Element;
  route: string;
};

const items: ItemType[] = [
  {
    id: "1",
    label: "Saved Cards",
    Icon: ({ color = "black" }: { color?: string }) => (
      <Ionicons name="card-sharp" size={24} color={color} />
    ),
    route: "/cards",
  },
  {
    id: "2",
    label: "Chat with us",
    Icon: ({ color = "black" }: { color?: string }) => (
      <MaterialCommunityIcons name="chat-processing" size={24} color={color} />
    ),
    route: "/chat",
  },
  {
    id: "3",
    label: "Security",
    Icon: ({ color = "black" }: { color?: string }) => (
      <Fontisto name="locked" size={24} color={color} />
    ),
    route: "/security",
  },
  {
    id: "4",
    label: "Invite Friends",
    Icon: ({ color = "black" }: { color?: string }) => (
      <FontAwesome6 name="building-user" size={24} color={color} />
    ),
    route: "/invite-friends",
  },
  {
    id: "5",
    label: "Legal",
    Icon: ({ color = "black" }: { color?: string }) => (
      <Entypo name="text-document-inverted" size={24} color={color} />
    ),
    route: "/legal",
  },
];

const MoreList = () => {
  const boxBackgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor(
    {
      light: "#ccc",
      dark: "#999",
    },
    "text"
  );
  const blackBg = useThemeColor(
    {
      light: "#000",
      dark: "#fff",
    },
    "background"
  );

  const renderItem = ({ item }: { item: ItemType }) => {
    return (
      <Pressable
        style={{ width: "100%" }}
        onPress={() => console.log(item.route)}
      >
        <View style={[styles.box, { backgroundColor: boxBackgroundColor }]}>
          <item.Icon color={blackBg} />

          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              color: textColor,
              flex: 1,
              marginLeft: 28,
            }}
          >
            {item.label}
          </Text>

          <Entypo name="chevron-thin-right" size={24} color={textColor} />
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 20, width: "100%" }}
      scrollEnabled={false}
    />
  );
};

export default MoreList;

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
