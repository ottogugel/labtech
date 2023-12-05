import { ScrollView, View } from "react-native";
import { BackButton } from "../components/BackButton";
import Logo from '../assets/logo_primary.svg'

export function FindLocation() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />
        <View className="items-center">
          <Logo />
        </View>
      </ScrollView>
    </View>
  );
}