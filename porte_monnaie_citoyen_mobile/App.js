import React from 'react';
import HomeScreen from './views/Home';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './views/Profile';
import ConnectionScreen from './views/Connection';

const App = createStackNavigator({
  Connection: {screen: ConnectionScreen, navigationOptions:{header: null}},
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

export default App;