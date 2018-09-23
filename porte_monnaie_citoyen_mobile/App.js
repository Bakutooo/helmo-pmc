import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './views/Profile';
import MissionScreen from './views/Mission';
import HomeScreen from './views/Home';

const App = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions:{headerStyle: {display: 'none'}}},
  Profile: {screen: ProfileScreen},
  Mission: {screen: MissionScreen},
});

export default App;
