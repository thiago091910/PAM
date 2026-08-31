import React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import StackNavigator from './navigation/stack.navigator';


export default function App() {

  return (

    <NavigationContainer>

      <StackNavigator />

    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
