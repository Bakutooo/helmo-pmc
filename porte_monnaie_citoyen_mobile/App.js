import React from 'react';
import Connection from './views/Connection'
import {createStackNavigator} from 'react-navigation';

const App = createStackNavigator({
  Connection: {screen: Connection, navigationOptions:{header: null}}
});

export default App;