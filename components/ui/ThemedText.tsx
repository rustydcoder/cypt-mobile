import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export const ThemedText = ({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...props
}: ThemedTextProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontFamily: "RobotoRegular",
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "RobotoMedium",
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "RobotoBold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "RobotoBold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    fontFamily: "RobotoRegular",
    color: "#0a7ea4",
  },
});
