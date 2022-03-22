import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// Screens
import SwatVideoScreen from './app/screens/SwatVideoScreen';

const Stack = createStackNavigator();

function App(props) {
  return (
    <Text>
      App
    </Text>
  );
}

export default App;