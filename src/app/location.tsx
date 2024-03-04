import { Header } from "@/components/header";
import { Entypo } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { white } from "tailwindcss/colors";

export default function Location() {
  return (
    <View>
      <View>
        <Header backButton />
      </View>
      <View className="w-80 h-20 left-8 rounded-lg bg-gray-100">
        <Text className="text-bluet font-bold text-lg left-3 top-1">Local</Text>
        <Text className="left-3">Find the nearest ones</Text>
      </View>

      <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
        <Text className="text-bluet font-bold text-lg left-3 top-1">
          Center
        </Text>
        <Text className="left-3">26 Huston Street, Newton City</Text>
        <View className="flex flex-row gap-3 items-center justify-end p-6">
          <TouchableOpacity>
            <Text className="text-white bg-blue-900">Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white bg-blue-400">Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white bg-blue-500">Call</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
        <Text className="text-bluet font-bold text-lg left-3 top-1">North</Text>
        <Text className="left-3">26 Huston Street, Newton City</Text>
        <View className="flex flex-row gap-3 items-center justify-end p-6">
          <TouchableOpacity>
            <Text className="text-white bg-blue-900">Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white bg-blue-400">Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white bg-blue-500">Call</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
        <Text className="text-bluet font-bold text-lg left-3 top-1">South</Text>
        <Text className="left-3">26 Huston Street, Newton City</Text>
        <View className="flex flex-row gap-3 items-center justify-end p-6">
          <TouchableOpacity>
            <Text className="text-white bg-blue-900">Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white bg-blue-400">Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white bg-blue-500">Call</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
        <Text className="text-bluet font-bold text-lg left-3 top-1">East</Text>
        <Text className="left-3">26 Huston Street, Newton City</Text>
        <View className="flex flex-row gap-3 items-center justify-end p-6">
          <TouchableOpacity>
            <Text className="text-white bg-blue-900">Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white bg-blue-400">Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white bg-blue-500">Call</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
        <Text className="text-bluet font-bold text-lg left-3 top-1">West</Text>
        <Text className="left-3">26 Huston Street, Newton City</Text>
        <View className="flex flex-row gap-3 items-center justify-end p-6">
          <TouchableOpacity>
            <Text className="text-white bg-blue-900"> <Entypo name="map" size={20} color={white} /> Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white bg-blue-400">Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white bg-blue-500">Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

