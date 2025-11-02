import { Colors } from "@/constants/Colors";
import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

export type ThemedTextInputProps = TextInputProps & {
  darkColor?: string;
  lightColor?: string;
  Icon?: React.ReactNode;
  onPressIcon?: () => void;
  showPasswordIcon?: boolean;
  isHidingPwd?: boolean;
};

const ThemedTextInput = forwardRef<TextInput, ThemedTextInputProps>(
  (
    { darkColor, lightColor, Icon, style, onPressIcon, isHidingPwd, ...props },
    ref
  ) => {
    // const color = useThemeColor(
    //   { light: lightColor, dark: darkColor },
    //   "background"
    // );

    return (
      <View style={styles.container}>
        <TextInput
          ref={ref}
          style={{ flex: 1, color: Colors.primary }}
          {...props}
        />

        {Icon && (
          <TouchableOpacity onPress={onPressIcon}>{Icon}</TouchableOpacity>
        )}
      </View>
    );
  }
);

export default ThemedTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
  },
});
