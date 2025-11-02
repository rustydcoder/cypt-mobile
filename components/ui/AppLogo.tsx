import { Image, StyleSheet, Text, View, type ImageProps } from "react-native";

type AppLogoProps = ImageProps & {
  showText?: boolean;
};

const LogoPng = require("../../assets/images/onboarding.png");

const AppLogo = ({ showText = false, ...props }: AppLogoProps) => {
  if (!showText)
    return (
      <Image
        source={LogoPng}
        style={[inlineStyles.logoImage, props.style]}
        {...props}
      />
    );

  return (
    <View style={inlineStyles.logoContainer}>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <Image
          source={LogoPng}
          style={[inlineStyles.logoImage, props.style]}
          {...props}
        />
      </View>

      <View style={{ width: "100%", alignItems: "flex-start" }}>
        <Text style={inlineStyles.title}>PAYNEXT.</Text>
      </View>
    </View>
  );
};

export default AppLogo;

const inlineStyles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },

  logoImage: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "flex-end",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginTop: 40,
    marginLeft: -75,
    // flex: 1,
  },
});
