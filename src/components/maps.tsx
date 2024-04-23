import { Foundation } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { white } from "tailwindcss/colors";

export default function Maps() {
  return (
    <TouchableOpacity>
      <Link
        className="text-white font-semibold bg-blue-900"
        href="https://maps.app.goo.gl/W7MYjaDaaCrnVF9C7"
      >
        {" "}
        <Foundation name="map" size={20} color={white} /> Maps
      </Link>
    </TouchableOpacity>
  );
}