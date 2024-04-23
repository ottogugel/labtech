import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { white } from "tailwindcss/colors";

export default function Schedule() {
  return (
    <TouchableOpacity>
      <Text className="text-white font-semibold bg-blue-400">
        {" "}
        <Feather name="clock" size={20} color={white} /> Schedule
      </Text>
    </TouchableOpacity>
  );
}