import { TouchableOpacity, View, Text } from "react-native";
import { ReactNode } from "react";

interface ButtonProps {
  text: string
  icon: ReactNode
  styleProps?: string
}


export function Button({ text, icon, styleProps } : ButtonProps ) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        className={`flex flex-row h-16 border border-white rounded-2xl items-center w-72 mb-6 ${styleProps}`}
      >
      <View className="flex justify-center p-4">
      {icon}
      </View>
      <Text className="text-white font-semibold flex-wrap max-w-sm uppercase ">
        {text}
      </Text>
      </TouchableOpacity>
    </View>
  )
}