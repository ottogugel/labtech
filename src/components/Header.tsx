import Logo from '../assets/logo_primary.svg';
import Logo2 from '../assets/logo_secondary.svg';
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { useNavigation } from '@react-navigation/native';

export function Header() {

  const { navigate } = useNavigation();

  return (
    <View className="w-full h-full items-center flex flex-col">
      <View className="flex flex-col grow items-center justify-center">
        <Logo2 />
        <Logo />
        <Text className="w-72 p-8 text-center text-white font-semibold uppercase">
          discover and explore tests in the laboratory
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        className="flex flex-row h-16 border bg-oranget border-white rounded-2xl items-center justify-evenly w-72 mb-9"
        onPress={() => navigate("home")}
      >
        <Feather name="chevrons-right" color={colors.white} size={32} />
        <Text className="text-white font-semibold text-base uppercase">
          Getting Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}