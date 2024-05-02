import Call from "@/components/call";
import { Header } from "@/components/header";
import Maps from "@/components/maps";
import Schedule from "@/components/schedule";

import { Image, ScrollView, Text, View } from "react-native";

export default function Location() {
  return (
    <View>
      <View>
        <Header backButton />
      </View>
      <View className="w-80 h-20 left-8 rounded-lg bg-gray-100 absolute mt-24 flex-row justify-between items-center shadow-xl">
        <View>
          <Text className="text-bluet font-bold text-lg left-5">Local</Text>
          <Text className="left-5">Find the nearest ones</Text>
        </View>
        <View className="right-20">
          <Text className="text-bluet font-bold text-lg">Filter</Text>
        </View>
      </View>

      <ScrollView
        className="mt-16 space-y-2"
        showsVerticalScrollIndicator={true}
      >
        <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
          {/* IMAGEM */}
          <View className="w-28 h-24">
            <Image
              src="https://www.euromed2015.com/wp-content/uploads/medical-4.jpg"
              className="w-24 h-24 rounded-l-lg"
            />
          </View>
          {/* TEXTO */}
          <View className="flex items-center bottom-24 right-32 border-border">
            <Text className="text-bluet font-bold text-lg left-28 top-1">
              Center
            </Text>
            <Text className="left-44">26 Huston Street, Newton City</Text>
          </View>
          <View className="flex flex-row items-center justify-end p-9 left-9 bottom-24">
            <Maps />
            <Schedule />
            <Call />
          </View>
        </View>
        <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
          {/* IMAGEM */}
          <View className="w-28 h-24">
            <Image
              src="https://born2invest.com/wp-content/uploads/2024/04/rephile-water-UNkNx6Hn9Fs-unsplash.jpg"
              className="w-24 h-24 rounded-l-lg"
            />
          </View>
          {/* TEXTO */}
          <View className="flex items-center bottom-24 right-32 border-border">
            <Text className="text-bluet font-bold text-lg left-28 top-1">
              North
            </Text>
            <Text className="left-44">26 Huston Street, Newton City</Text>
          </View>
          <View className="flex flex-row items-center justify-end p-9 left-9 bottom-24">
            <Maps />
            <Schedule />
            <Call />
          </View>
        </View>
        <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
          {/* IMAGEM */}
          <View className="w-28 h-24">
            <Image
              src="https://blog.scielo.org/en/wp-content/uploads/sites/2/2021/08/national-cancer-institute-v7ibB19EUbQ-unsplash-300x180.jpg"
              className="w-24 h-24 rounded-l-lg"
            />
          </View>
          {/* TEXTO */}
          <View className="flex items-center bottom-24 right-32 border-border">
            <Text className="text-bluet font-bold text-lg left-28 top-1">
              South
            </Text>
            <Text className="left-44">26 Huston Street, Newton City</Text>
          </View>
          <View className="flex flex-row items-center justify-end p-9 left-9 bottom-24">
            <Maps />
            <Schedule />
            <Call />
          </View>
        </View>
        <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
          {/* IMAGEM */}
          <View className="w-28 h-24">
            <Image
              src="https://www.raredis.org/wp-content/uploads/2020/03/national-cancer-institute-rHfsPolwIgk-unsplash-150x150.jpg"
              className="w-24 h-24 rounded-l-lg"
            />
          </View>
          {/* TEXTO */}
          <View className="flex items-center bottom-24 right-32 border-border">
            <Text className="text-bluet font-bold text-lg left-28 top-1">
              East
            </Text>
            <Text className="left-44">26 Huston Street, Newton City</Text>
          </View>
          <View className="flex flex-row items-center justify-end p-9 left-9 bottom-24">
            <Maps />
            <Schedule />
            <Call />
          </View>
        </View>
        <View className="w-80 h-24 left-8 rounded-lg bg-gray-100">
          {/* IMAGEM */}
          <View className="w-28 h-24">
            <Image
              src="https://media.bizj.us/view/img/8915032/uellabspace.jpg"
              className="w-24 h-24 rounded-l-lg"
            />
          </View>
          {/* TEXTO */}
          <View className="flex items-center bottom-24 right-32 border-border">
            <Text className="text-bluet font-bold text-lg left-28 top-1">
              West
            </Text>
            <Text className="left-44">26 Huston Street, Newton City</Text>
          </View>
          <View className="flex flex-row items-center justify-end p-9 left-9 bottom-24">
            <Maps />
            <Schedule />
            <Call />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

