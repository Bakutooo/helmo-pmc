import React from 'react';
import MissionsScreen from './views/Missions';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './views/Profile';
import ConnectionScreen from './views/Connection';
import MissionScreen from './views/Mission';
import HomeScreen from './views/Home';

const App = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions:{header: null}},
  Connection: {screen: ConnectionScreen},
  Missions: {screen: MissionsScreen},
  Profile: {screen: ProfileScreen},
  Mission: {screen: MissionScreen},
});

export default App;
