import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Header } from "@/components/header";

import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { white } from "tailwindcss/colors";

export default function Home() {
  return (
    <View>
      <Header />
      <Carousel />
      <Button href="/location" color="bg-blue-500">
        <Button.Icon>
          <FontAwesome6 name="map-location-dot" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Find a location</Button.Text>
      </Button>

      <Button href="/services" color="bg-blue-700">
        <Button.Icon>
          <FontAwesome6 name="heart-circle-plus" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Services offered</Button.Text>
      </Button>
      <Button href="/appointment" color="bg-blue-900">
        <Button.Icon>
          <MaterialCommunityIcons name="calendar-clock" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Make an appointment</Button.Text>
      </Button>
      <Button href="/transactions" color="bg-blue-400">
        <Button.Icon>
          <FontAwesome6 name="flask-vial" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Transactions</Button.Text>
      </Button>

      <Button href="/faq" color="bg-blue-950">
        <Button.Icon>
          <MaterialCommunityIcons name="help-circle" size={24} color={white} />
        </Button.Icon>
        <Button.Text>FAQ</Button.Text>
      </Button>
    </View>
  );
}