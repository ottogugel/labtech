import { Header } from "@/components/header";
import { Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Services() {
  return (
    <View>
      <View>
        <Header backButton />
      </View>
        <Animatable.Text
          className="justify-center text-center text-2xl text-green-500"
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
        >
          Coming Soon...
        </Animatable.Text>
    </View>
  );
}
