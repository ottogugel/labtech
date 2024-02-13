import { Image, View } from "react-native";
import { BackButton } from "./back-button";

export function Header({backButton = false}) {
  return (
    <View className="bg-bluet pb-20 ">
      { backButton &&
        <BackButton />
      }
      <View className="flex items-center top-12">
        <Image source={require("../assets/logo.png")} />
      </View>
    </View>
  );
}