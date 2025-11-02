import { Colors } from "@/constants/Colors";
import { bodyStyles } from "@/constants/Styles";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppLogo from "../ui/AppLogo";
import { ThemedView } from "../ui/ThemedView";

type AuthWrapperProps = {
  children: React.ReactNode;
  subText?: string;
};

const AuthWrapper = ({ children, subText }: AuthWrapperProps) => {
  const insets = useSafeAreaInsets();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={[bodyStyles.container, styles.container]}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View
              style={[
                styles.logoContainer,
                keyboardVisible && styles.logoContainerCollapsed,
              ]}
            >
              <AppLogo showText />
              {subText && <Text style={styles.title}>{subText}</Text>}
            </View>

            <View
              style={[styles.content, { paddingBottom: insets.bottom || 16 }]}
            >
              {children}
            </View>
          </ScrollView>
        </ThemedView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AuthWrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainerCollapsed: {
    flex: 0.5,
    width: "100%",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "white",
    marginTop: 35,
  },
  content: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
});
