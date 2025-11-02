import { ThemedView } from "@/components/ui/ThemedView";
import { Link, useRouter } from "expo-router";
import { Text } from "react-native";

export default function Index() {
  const router = useRouter();

  //   useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     router.replace("/onboarding");
  //   }, 5000);
  //   return () => clearTimeout(timeout);
  // }, []);

  // return <SplashLogo />;

  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Link href="/home">
        <Text>Go home</Text>
      </Link>
    </ThemedView>
  );
}
