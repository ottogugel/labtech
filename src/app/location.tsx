import Call from "@/components/call";
import { Header } from "@/components/header";
import Input from "@/components/input";
import Maps from "@/components/maps";
import Schedule from "@/components/schedule";

import { ScrollView, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Location() {
  return (
    <View>
      <View>
        <Header backButton />
      </View>
      <View className="w-80 h-20 left-8 rounded-lg bg-gray-100 absolute mt-20 flex-row justify-between items-center shadow-xl">
        <View>
          <Text className="text-bluet font-bold text-lg left-5">Local</Text>
          <Text className="left-5">Find the nearest ones</Text>
        </View>
        <View className="right-20">
          <Text className="text-bluet font-bold text-lg">Filter</Text>
          <Input />
        </View>
      </View>

      <ScrollView
        className="mt-16 space-y-2"
        showsVerticalScrollIndicator={true}
      >
        <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
          {/* TEXTO */}
          <View>
            <Text className="text-bluet font-bold text-lg left-28 top-1">
              Center
            </Text>
            <Text className="left-28">26 Huston Street, Newton City</Text>
          </View>
          <View className="flex flex-row items-center justify-end p-9 left-9">
            <Maps />
            <Schedule />
            <Call />
          </View>
        </View>
        <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
          {/* TEXTO */}
          <View>
            <Text className="text-bluet font-bold text-lg left-28 top-1">
              North
            </Text>
            <Text className="left-28">26 Huston Street, Newton City</Text>
          </View>
          <View className="flex flex-row items-center justify-end p-9 left-9">
            <Maps />
            <Schedule />
            <Call />
          </View>
        </View>
        <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
          {/* TEXTO */}
          <View>
            <Text className="text-bluet font-bold text-lg left-28 top-1">
              South
            </Text>
            <Text className="left-28">26 Huston Street, Newton City</Text>
          </View>
          <View className="flex flex-row items-center justify-end p-9 left-9">
            <Maps />
            <Schedule />
            <Call />
          </View>
        </View>
        <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
          {/* TEXTO */}
          <View>
            <Text className="text-bluet font-bold text-lg left-28 top-1">
              East
            </Text>
            <Text className="left-28">26 Huston Street, Newton City</Text>
          </View>
          <View className="flex flex-row items-center justify-end p-9 left-9">
            <Maps />
            <Schedule />
            <Call />
          </View>
        </View>
        <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
          {/* TEXTO */}
          <View>
            <Text className="text-bluet font-bold text-lg left-28 top-1">
              West
            </Text>
            <Text className="left-28">26 Huston Street, Newton City</Text>
          </View>
          <View className="flex flex-row items-center justify-end p-9 left-9">
            <Maps />
            <Schedule />
            <Call />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

