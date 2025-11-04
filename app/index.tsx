import SplashLogo from "@/components/SplashLogo";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  //   useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     router.replace("/onboarding");
  //   }, 5000);
  //   return () => clearTimeout(timeout);
  // }, []);

  // return <SplashLogo />;

  return <SplashLogo />;
}
