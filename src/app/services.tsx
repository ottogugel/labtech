import { Header } from "@/components/header";
import { Text, View, ScrollView } from "react-native";

export default function Services() {
  return (
    <View>
      <View>
        <Header backButton />
      </View>
      <View className="w-80 h-16 left-8 rounded-lg bg-gray-50 absolute mt-24 flex-row justify-between items-center shadow-xl">
        <View>
          <Text className="text-bluet font-bold text-lg left-5">Services</Text>
          <Text className="left-5">Below is a list of services</Text>
        </View>
      </View>
      <View className="w-80 h-16 left-8 top-14 rounded-lg bg-gray-50 shadow-xl ">
        <Text className="text-bluet font-bold text-xs left-5 top-2">
          Search by category
        </Text>
      </View>

      <View>
        <View className="w-80 h-10 rounded-xl flex items-start justify-center mt-16 left-8 bg-gray-50 shadow-xl">
          <Text className="left-4 text-bluet font-bold text-sm uppercase">
            Hematalogy
          </Text>
        </View>
        <View className="w-80 h-10 rounded-xl flex items-start justify-center mt-3 left-8 bg-gray-50 shadow-xl">
          <Text className="left-4 text-bluet font-bold text-sm uppercase">
            Chemistry
          </Text>
        </View>
        <View className="w-80 h-10 rounded-xl flex items-start justify-center mt-3 left-8 bg-gray-50 shadow-xl">
          <Text className="left-4 text-bluet font-bold text-sm uppercase">
            Microscopy
          </Text>
        </View>
        <View className="w-80 h-10 rounded-xl flex items-start justify-center mt-3 left-8 bg-gray-50 shadow-xl">
          <Text className="left-4 text-bluet font-bold text-sm uppercase">
            Salivary Amylase
          </Text>
        </View>
        <View className="w-80 h-10 rounded-xl flex items-start justify-center mt-3 left-8 bg-gray-50 shadow-xl">
          <Text className="left-4 text-bluet font-bold text-sm uppercase">
            Blood Sugar
          </Text>
        </View>
        <View className="w-80 h-10 rounded-xl flex items-start justify-center mt-3 left-8 bg-gray-50 shadow-xl">
          <Text className="left-4 text-bluet font-bold text-sm uppercase">
            Serology
          </Text>
        </View>
        <View className="w-80 h-10 rounded-xl flex items-start justify-center mt-3 left-8 bg-gray-50 shadow-xl">
          <Text className="left-4 text-bluet font-bold text-sm uppercase">
            Thyroid Function Test
          </Text>
        </View>
        <View className="w-80 h-10 rounded-xl flex items-start justify-center mt-3 left-8 bg-gray-50 shadow-xl">
          <Text className="left-4 text-bluet font-bold text-sm uppercase">
            Special Test
          </Text>
        </View>
        <View className="w-80 h-10 rounded-xl flex items-start justify-center mt-3 left-8 bg-gray-50 shadow-xl">
          <Text className="left-4 text-bluet font-bold text-sm uppercase">
            Drug Testing
          </Text>
        </View>
      </View>
    </View>
  );
}
