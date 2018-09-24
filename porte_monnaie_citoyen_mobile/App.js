import HomeScreen from './views/Home';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './views/Profile';
import EventScreen from './views/Event';
import ConfirmParticipationScreen from './views/ConfirmParticipation';

const App = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions:{header: null}},
  Profile: {screen: ProfileScreen},
  Event: {screen: EventScreen},
  CameraParticip: {screen: ConfirmParticipationScreen}
});

export default App;
