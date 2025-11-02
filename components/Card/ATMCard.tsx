import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MastercardIcon from "../icons/MastercardIcon";
import SimCardChip from "../icons/SimCardChip";
import DisplayCard from "../ui/DisplayCard";
import { Card } from "./data";

type ATMCardProps = {
  card: Card;
};

const ATMCard = ({ card }: ATMCardProps) => {
  return (
    <DisplayCard style={styles.card}>
      <View style={styles.iconWrapper}>
        <View>
          <Text
            style={[
              styles.text,
              {
                fontWeight: 800,
              },
            ]}
          >
            debit
          </Text>

          <SimCardChip />
        </View>

        <MastercardIcon />
      </View>

      <View
        style={[
          styles.container,
          {
            justifyContent: "center",
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              fontSize: 25,
            },
          ]}
        >
          {card.cardNumber}
        </Text>
      </View>

      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            justifyContent: "space-between",
          },
        ]}
      >
        <Text style={styles.text}>{card.cardHolderName}</Text>

        <View style={{}}>
          <Text style={styles.text}>VALID</Text>

          <Text style={[styles.text, { fontWeight: "800" }]}>{card.valid}</Text>
        </View>
      </View>
    </DisplayCard>
  );
};

export default ATMCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 32,
    borderRadius: 25,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  iconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
  },
  container: {
    marginTop: 20,
    alignItems: "center",
  },
});
