import { Button } from "@/components/button";
import { Entypo  } from "@expo/vector-icons";
import { View } from "react-native";
import { white } from "tailwindcss/colors";

export default function Home() {
  return (
    <View className="flex-1">
      <Button href="/location">
        <Button.Icon>
          <Entypo name="map" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Find a location</Button.Text>
      </Button>

      <Button href="/services">
        <Button.Icon>
          <Entypo name="box" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Services offered</Button.Text>
      </Button>
      <Button href="/appointment">
        <Button.Icon>
          <Entypo name="calendar" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Make an appointment</Button.Text>
      </Button>
      <Button href="/transactions">
        <Button.Icon>
          <Entypo name="lab-flask" size={24} color={white} />
        </Button.Icon>
        <Button.Text>Transactions</Button.Text>
      </Button>

      <Button href="/faq">
        <Button.Icon>
          <Entypo name="help-with-circle" size={24} color={white} />
        </Button.Icon>
        <Button.Text>FAQ</Button.Text>
      </Button>
    </View>
  );
}