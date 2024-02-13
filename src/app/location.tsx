import { Header } from "@/components/header";
import { Text, View } from "react-native";

export default function Location() {
  return (
    <View>
      <View>
        <Header backButton />
      </View>

      <View className="border border-black w-80 h-20 left-8 rounded-lg">
        <Text className="text-bluet font-bold text-lg left-3 top-1">Local</Text>
        <Text className="left-3">Find the nearest ones</Text>
      </View>

      <View className="border border-black w-80 h-24 left-8 rounded-lg">
        <Text className="text-bluet font-bold text-lg left-3 top-1">
          Center
        </Text>
        <Text className="left-3">26 Huston Street, Newton City</Text>
      </View>
    </View>
  );
}

