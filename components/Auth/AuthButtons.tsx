import { ThemedText } from "@/app-example/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const { width: WIDTH } = Dimensions.get("window");

const AuthButtons = () => {
  return (
    <View style={styles.wrapper}>
      <Link href="/signin" style={styles.button}>
        <ThemedText style={styles.text}>LOGIN</ThemedText>
      </Link>

      <Link href="/signup" style={styles.button}>
        <ThemedText style={styles.text}>SIGN UP</ThemedText>
      </Link>
    </View>
  );
};

export default AuthButtons;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  button: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "white",
    width: "100%",
    alignSelf: "center",
  },
  text: {
    color: Colors.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
});
