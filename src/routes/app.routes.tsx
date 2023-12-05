import { createNativeStackNavigator  } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { GettingStarted } from '../screens/GettingStarted';
import { Home } from '../screens/Home';
import { FindLocation } from '../screens/FindLocation';
import { ServicesOffered } from '../screens/ServicesOffered';
import { MakeAppointment } from '../screens/MakeAppointment';
import { Transactions } from '../screens/Transactions';
import { FAQ } from '../screens/Faq';

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="gs" component={GettingStarted} />
      <Screen name="home" component={Home} />
      <Screen name="fl" component={FindLocation} />
      <Screen name="so" component={ServicesOffered} />
      <Screen name="ma" component={MakeAppointment} />
      <Screen name="tr" component={Transactions} />
      <Screen name="faq" component={FAQ} />
    </Navigator>
  );
}