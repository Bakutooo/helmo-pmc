import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './views/Home';

const App = createStackNavigator({
  Home: {screen: HomeScreen}
});

export default App;
