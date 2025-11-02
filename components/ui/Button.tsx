import { Colors } from "@/constants/Colors";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

export type ThemedButtonProps = PressableProps & {
  style?: ViewStyle;
  label?: string;
  labelStyle?: TextStyle;
};

const ThemedButton = ({
  style,
  label,
  labelStyle,
  ...props
}: ThemedButtonProps) => {
  if (label) {
    return (
      <Pressable
        style={({ pressed }) => [styles.btn, style, pressed && styles.pressed]}
        {...props}
      >
        <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.btn, style, pressed && styles.pressed]}
      {...props}
    />
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.5,
  },
  labelStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
