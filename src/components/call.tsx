import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { white } from "tailwindcss/colors";

export default function Call() {
  return (
      <TouchableOpacity className="rounded-r-xl">
        <Link className="text-white font-semibold bg-blue-700" href="tel:+5583988015825">
          {" "}
          <Feather name="phone" size={20} color={white} />
          Call
        </Link>
      </TouchableOpacity>
  );
}