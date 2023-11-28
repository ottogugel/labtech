import { TouchableOpacity, View, Text } from "react-native";
import { Feather, Entypo } from '@expo/vector-icons';
import colors from "tailwindcss/colors";
import { ElementType, ReactNode } from "react";

interface ButtonProps {
  text: string
  icon: ReactNode
}


export function Button({ text, icon } : ButtonProps ) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        className='flex flex-row h-16 border bg-blue-400 border-white rounded-2xl items-center justify-evenly w-64 mb-6'
      >
      {icon}
      <Text className="text-white font-semibold text-base text-center uppercase">
        {text}
      </Text>
      </TouchableOpacity>
    </View>
  )
}