import { View } from "react-native";
import Logo from "../assets/logo_primary.svg";
import {
  Feather,
  Entypo,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Button } from "../components/Button";

export function Home() {
  return (
    <View className="flex-1 bg-background items-center">
      <View className="px-8 pt-16 items-center mb-16">
        <Logo />
      </View>
      <Button
        text="Find a location"
        icon={<Feather name="map" color={colors.white} size={28} />}
        styleProps="bg-blue-400"
      />
      <Button
        text="Services offered"
        icon={<Fontisto name="laboratory" color={colors.white} size={28} />}
        styleProps="bg-blue-900"
      />
      <Button
        text="Make an appointment"
        icon={<MaterialCommunityIcons name="calendar-clock" color={colors.white} size={28} />}
        styleProps="bg-blue-600"
      />
      <Button
        text="Transactions"
        icon={<Fontisto name="test-tube-alt" color={colors.white} size={28} />}
        styleProps="bg-blue-800"
      />
      <Button
        text="FAQ"
        icon={<Entypo name="help-with-circle" color={colors.white} size={28} />}
        styleProps="bg-darkblue"
      />
    </View>
  );
}
