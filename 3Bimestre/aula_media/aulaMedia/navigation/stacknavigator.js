import React from 'react';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import Cadastro from '../screens/Cadastro';
import Resultado from '../screens/Resultado';


// Cria o Stack Navigator
const Stack = createNativeStackNavigator();


export default function StackNavigator() {

  return (

    <Stack.Navigator>

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          title: 'Sistema Escolar'
        }}
      />


      <Stack.Screen
        name="Resultado"
        component={Resultado}
        options={{
          title: 'Resultado'
        }}
      />

    </Stack.Navigator>

  );
}
