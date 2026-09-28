import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#101B35' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: '700' }, contentStyle: { backgroundColor: '#F4F6FB' } }}>
        <Stack.Screen name="Início" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Minhas tarefas" component={TasksScreen} />
        <Stack.Screen name="Nova tarefa" component={AddTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
