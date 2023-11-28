import { createNativeStackNavigator  } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { GettingStarted } from '../screens/GettingStarted';
import { Home } from '../screens/Home';

export function AppRoutes() {
  return (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen
      name='gs'
      component={GettingStarted}
    />
    <Screen
      name='home'
      component={Home}
    />

  </Navigator>
  )
}