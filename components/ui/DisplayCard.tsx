import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type DisplayCardProps = {
  style?: ViewStyle;
  children?: React.ReactNode;
};

const DisplayCard = ({ style, children, ...props }: DisplayCardProps) => {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

export default DisplayCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 150,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
