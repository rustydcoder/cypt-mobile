import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

export type PasswordInputProps = TextInputProps & {
  value: string;
  showIcon?: boolean;
};

const PasswordInput = forwardRef<TextInput, PasswordInputProps>(
  ({ value, showIcon, ...props }, ref) => {
    const [hidePassword, setHidePassword] = React.useState(true);

    const toggleHidePassword = () => setHidePassword((prev) => !prev);

    return (
      <View style={styles.container}>
        <TextInput
          ref={ref}
          style={{ flex: 1, color: Colors.primary }}
          value={value}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          secureTextEntry={hidePassword}
          {...props}
        />

        {showIcon && (
          <TouchableOpacity onPress={toggleHidePassword}>
            {!hidePassword ? (
              <Ionicons
                name="eye-off-outline"
                size={24}
                color={Colors.primary}
              />
            ) : (
              <Ionicons name="eye-outline" size={24} color={Colors.primary} />
            )}
          </TouchableOpacity>
        )}
      </View>
    );
  }
);

export default PasswordInput;

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
