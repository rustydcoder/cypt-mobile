import { Colors } from "@/constants/Colors";
import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";

export type ThemedButtonProps = PressableProps & { style?: ViewStyle };

const ThemedButton = ({ style, ...props }: ThemedButtonProps) => {
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
});
