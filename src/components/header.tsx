import { View } from "react-native";
import { BackButton } from "./back-button";
import Logo from '../assets/logo.svg'

export function Header({backButton = false}) {
  return (
    <View className="bg-bluet pb-24 ">
      { backButton &&
        <BackButton />
      }
      <View className="flex items-center top-12">
        <Logo width={140} />
      </View>
    </View>
  );
}