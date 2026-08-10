import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from '../screens/login/login';
import inicial from '../screens/inicial/inicial';
import teste from '../screens/home/teste';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="login"
          component={Login}
        />

        <Stack.Screen
          name="inicial"
          component={Home}
        />

          <Stack.Screen
          name="teste"
          component={Home}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}