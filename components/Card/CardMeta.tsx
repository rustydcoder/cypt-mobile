import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ui/ThemedText";
import { Meta } from "./data";

type CardMetaProps = {
  meta: Meta;
};

const Divider = ({
  borderWidth = 1,
  color = "black",
  ...props
}: {
  borderWidth?: number;
  color?: string;
}) => {
  return (
    <View
      style={{
        width: "100%",
        height: borderWidth,
        backgroundColor: color,
        marginTop: 12,
        marginBottom: 4,
      }}
      {...props}
    />
  );
};

const CardMeta = ({ meta }: CardMetaProps) => {
  const borderColor = useThemeColor({}, "text");

  return (
    <View style={[styles.container, { borderColor }]}>
      <View style={[styles.usageContainer, { borderColor }]}>
        <ThemedText style={{ opacity: 0.8, fontSize: 14, fontWeight: "800" }}>
          {meta.usage}
        </ThemedText>
      </View>

      <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
        <View style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 8 }}>
            <ThemedText>
              {meta.currency}
              {meta.spent.toLocaleString()}
            </ThemedText>
          </View>
          <Divider color={Colors.primary} />
          <View style={{ paddingHorizontal: 8 }}>
            <ThemedText>Spent</ThemedText>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View style={{ paddingHorizontal: 8 }}>
            <ThemedText>
              {meta.currency}
              {meta.dailyLimit.toLocaleString()}
            </ThemedText>
          </View>
          <Divider color={borderColor} />
          <View style={{ paddingHorizontal: 8 }}>
            <ThemedText>Daily limit</ThemedText>
          </View>
        </View>
      </View>

      <View>
        <Pressable>
          <Entypo name="chevron-right" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default CardMeta;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 38,
  },
  usageContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});
