import { Image, View } from "react-native";

export function Header() {
  return (
      <View className="items-center pb-5 m-6">
        <Image source={require("../assets/logo.png")} />
      </View>
  );
}