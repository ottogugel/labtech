import { TextInput, View } from "react-native";
import colors from "tailwindcss/colors";

export default function Input() {
  return (
      <TextInput
        className="border border-b text-center text-xs"
        placeholder="In development..."
        placeholderTextColor={colors.gray[500]}
      />
  );
}