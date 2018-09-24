import HomeScreen from './views/Home';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './views/Profile';
import MissionScreen from './views/Mission';
import PartnersScreen from './views/Partners'

const App = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions:{header: null}},
  Profile: {screen: ProfileScreen},
  Event: {screen: MissionScreen},
  Partners: {screen: PartnersScreen}
});

export default App;