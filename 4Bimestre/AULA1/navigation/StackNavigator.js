import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from '../screens/Inicial';
import CalcularMedia from '../screens/CalcularMedia';
import ListaEstudantes from '../screens/ListaEstudantes';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Inicial"
        component={Inicial}
        options={{
          title: 'Média Escolar'
        }}
      />

      <Stack.Screen
        name="CalcularMedia"
        component={CalcularMedia}
        options={{
          title: 'Calcular Média'
        }}
      />

      <Stack.Screen
        name="ListaEstudantes"
        component={ListaEstudantes}
        options={{
          title: 'Estudantes'
        }}
      />

    </Stack.Navigator>
  );
}