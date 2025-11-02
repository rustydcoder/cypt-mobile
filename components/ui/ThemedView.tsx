import { useThemeColor } from "@/hooks/useThemeColor";
import { View, type ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  safe?: boolean;
};

export const ThemedView = ({
  style,
  lightColor,
  darkColor,
  safe = false,
  ...props
}: ThemedViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const insets = useSafeAreaInsets();

  if (!safe) return <View style={[{ backgroundColor }, style]} {...props} />;

  return (
    <View
      style={[
        {
          backgroundColor,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
};
