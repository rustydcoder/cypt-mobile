import AuthWrapper from "@/components/Auth/AuthWrapper";
import ThemedButton from "@/components/ui/Button";
import PasswordInput from "@/components/ui/PasswordInput";
import Spacer from "@/components/ui/Spacer";
import ThemedTextInput from "@/components/ui/ThemedTextInput";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const signup = () => {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const usernameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("SIGN UP pressed");
      setIsLoading(false);

      router.replace("/home");
    }, 2000);
  };

  return (
    <AuthWrapper>
      <View style={{ width: "100%", flex: 1, justifyContent: "center" }}>
        <ThemedTextInput
          ref={usernameInputRef}
          value={username}
          onChangeText={setUsername}
          placeholder="Name"
          placeholderTextColor={Colors.primary}
          Icon={
            <Ionicons
              name="person-circle-outline"
              size={24}
              color={Colors.primary}
            />
          }
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => emailInputRef.current?.focus()}
          onPressIcon={() => usernameInputRef.current?.focus()}
          autoCorrect={false}
          autoComplete="off"
        />

        <ThemedTextInput
          ref={emailInputRef}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={Colors.primary}
          keyboardType="email-address"
          Icon={
            <Ionicons name="mail-outline" size={24} color={Colors.primary} />
          }
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
          onPressIcon={() => emailInputRef.current?.focus()}
          autoCorrect={false}
        />

        <PasswordInput
          ref={passwordInputRef}
          value={password}
          placeholder="Password"
          placeholderTextColor={Colors.primary}
          onChangeText={setPassword}
          showIcon
          returnKeyType="done"
        />

        <ThemedButton
          style={styles.button}
          onPress={handleSignUp}
          disabled={isLoading}
        >
          <Text style={styles.text}>SIGN UP</Text>
        </ThemedButton>

        <Spacer height={10} />

        {/* ! make it a link */}
        <Text style={styles.link}>
          Already have an account?{" "}
          <Link href="/signin" style={[styles.link, { color: "#E6E6E6" }]}>
            Sign in
          </Link>
        </Text>
      </View>
    </AuthWrapper>
  );
};

export default signup;

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
