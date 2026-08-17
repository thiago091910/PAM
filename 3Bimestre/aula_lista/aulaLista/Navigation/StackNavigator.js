import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Lista from '../screens/Lista';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Início',
          }}
        />

        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{
            title: 'Lista de Compras',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}