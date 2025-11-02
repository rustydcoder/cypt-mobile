import AuthWrapper from "@/components/Auth/AuthWrapper";
import ThemedButton from "@/components/ui/Button";
import PasswordInput from "@/components/ui/PasswordInput";
import Spacer from "@/components/ui/Spacer";
import ThemedTextInput from "@/components/ui/ThemedTextInput";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

const { width: WIDTH } = Dimensions.get("window");

const login = () => {
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("SIGN IN Pressed");
      setIsLoading(false);

      router.replace("/home");
    }, 2000);
  };

  return (
    <AuthWrapper subText="welcome back">
      <View style={{ width: "100%", flex: 1, justifyContent: "center" }}>
        <ThemedTextInput
          ref={emailInputRef}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={Colors.primary}
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
          Icon={
            <Ionicons name="mail-outline" size={24} color={Colors.primary} />
          }
          onPressIcon={() => emailInputRef.current?.focus()}
          autoCorrect={false}
        />

        <PasswordInput
          ref={passwordInputRef}
          value={password}
          placeholder="Password"
          placeholderTextColor={Colors.primary}
          onChangeText={setPassword}
          returnKeyType="done"
          showIcon
        />

        <ThemedButton
          style={styles.button}
          onPress={handleSignIn}
          disabled={isLoading}
        >
          <Text style={styles.text}>SIGN IN</Text>
        </ThemedButton>

        <Spacer height={10} />

        {/* ! make it a link */}
        <Text style={styles.link}>Forgot Password?</Text>
        <Spacer height={10} />
        <Text style={styles.link}>
          Don't have an account?{" "}
          <Link href="/signup" style={[styles.link, { color: "#E6E6E6" }]}>
            Sign Up
          </Link>
        </Text>
      </View>
    </AuthWrapper>
  );
};

export default login;

const styles = StyleSheet.create({
  button: {
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
  link: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});
