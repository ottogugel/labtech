import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { white } from "tailwindcss/colors";

export default function Call() {
  return (
      <TouchableOpacity className="rounded-r-xl">
        <Text className="text-white font-semibold bg-blue-700">
          {" "}
          <Feather name="phone" size={20} color={white} />
          Call
        </Text>
      </TouchableOpacity>
  );
}