import React from 'react';
import HomeScreen from './views/Home';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './views/Profile';

const App = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen}
});

export default App;