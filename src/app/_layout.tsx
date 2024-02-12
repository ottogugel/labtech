import { Header } from "@/components/header";
import Loading from "@/components/loading"
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Slot } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  if(!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView className="bg-bluet">
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Header />
      <Slot />
    </SafeAreaView>
  );
}