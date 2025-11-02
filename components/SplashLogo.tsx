import { Colors } from "@/constants/Colors";
import { bodyStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { ThemedView } from "./ui/ThemedView";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppLogo from "./ui/AppLogo";

const AnimatedAppLogo = Animated.createAnimatedComponent(AppLogo);
const DURATION = 1000;
const DELAY = 3000;

export default function SplashLogo() {
  const [showSkipLink, setShowSkipLink] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "PAYNEXT.";

  const opacity = useSharedValue<number>(0.3);
  const imageOffsetY = useSharedValue<number>(0);
  const imageOffsetX = useSharedValue<number>(0);
  const skipOpacity = useSharedValue<number>(0);
  const insets = useSafeAreaInsets();

  // Initial animation setup
  useEffect(() => {
    // Reset to initial state
    imageOffsetX.value = 0;
    imageOffsetY.value = 0;

    const timeout = setTimeout(() => {
      setShowSkipLink(true);

      // Move logo up slightly
      imageOffsetY.value = withTiming(-15, { duration: 800 });

      const appLogoTimeout = setTimeout(() => {
        // Move logo more upward
        imageOffsetY.value = withTiming(-40, { duration: 500 });
      }, 200);

      skipOpacity.value = withTiming(1, { duration: 800 });

      return () => clearTimeout(appLogoTimeout);
    }, DELAY);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Only apply pulsing effect when text is not complete
    if (!showSkipLink) {
      opacity.value = withRepeat(
        withTiming(1, { duration: DURATION }),
        -1,
        true
      );
    }
    // When skip link shows, the text animation will control opacity
  }, [showSkipLink]);

  useEffect(() => {
    if (showSkipLink) {
      let currentText = "";
      const textDelay = 500;

      setDisplayedText("");
      const letterInterval = 250;

      fullText.split("").forEach((letter, index) => {
        setTimeout(() => {
          currentText += letter;
          setDisplayedText(currentText);

          // When the first letter appears, start moving the logo
          if (index === 0) {
            imageOffsetX.value = withTiming(-20, { duration: 300 });
          }

          // When the text is complete, set opacity to 1
          if (currentText === fullText) {
            opacity.value = withTiming(1, { duration: 400 });
          }
        }, textDelay + index * letterInterval);
      });
    }
  }, [showSkipLink]);

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const imagePositionStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: imageOffsetY.value }],
  }));

  const logoPositionStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: imageOffsetX.value }],
  }));

  return (
    <ThemedView style={[bodyStyles.container, inlineStyles.container]}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.View style={[inlineStyles.logoContainer, imagePositionStyle]}>
          <Animated.View style={logoPositionStyle}>
            <AnimatedAppLogo
              style={opacityStyle}
              source={require("../assets/images/onboarding.png")}
            />
          </Animated.View>

          <Animated.Text
            entering={FadeInRight.duration(2000).delay(DELAY)}
            style={[inlineStyles.title]}
          >
            {displayedText}
          </Animated.Text>
        </Animated.View>
      </View>

      {/* Safe-area aware Skip with enhanced fade-in */}
      <Animated.View
        entering={FadeInDown.duration(800).delay(DELAY)}
        style={[
          inlineStyles.skipContainer,
          { paddingBottom: insets.bottom || 16 },
        ]}
      >
        {showSkipLink && (
          <Link style={inlineStyles.skipLink} href="/(auth)">
            Skip
          </Link>
        )}
      </Animated.View>
    </ThemedView>
  );
}

const inlineStyles = StyleSheet.create({
  logo: {
    fontSize: 28,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    position: "relative",
    flex: 1,
  },
  logoImage: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },
  button: {
    padding: 10,
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  skipContainer: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  skipLink: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  title: {
    fontSize: 35,
    // flex: 1,
    fontWeight: "bold",
    color: "white",
    marginTop: 40,
    marginLeft: -75,
    position: "relative",
  },
});
