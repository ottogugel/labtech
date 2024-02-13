import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Header } from "@/components/header";

import { Entypo } from "@expo/vector-icons";
import { View } from "react-native";
import { white } from "tailwindcss/colors";

export default function Home() {
  return (
    <View>
      <Header />
      <Carousel />
      <Button href="/location" color="bg-blue-500">
        <Button.Icon>
          <Entypo name="map" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Find a location</Button.Text>
      </Button>

      <Button href="/services" color="bg-blue-700">
        <Button.Icon>
          <Entypo name="box" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Services offered</Button.Text>
      </Button>
      <Button href="/appointment" color="bg-blue-900">
        <Button.Icon>
          <Entypo name="calendar" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Make an appointment</Button.Text>
      </Button>
      <Button href="/transactions" color="bg-blue-400">
        <Button.Icon>
          <Entypo name="lab-flask" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Transactions</Button.Text>
      </Button>

      <Button href="/faq" color="bg-blue-950">
        <Button.Icon>
          <Entypo name="help-with-circle" size={24} color={white} />
        </Button.Icon>
        <Button.Text>FAQ</Button.Text>
      </Button>
    </View>
  );
}