import HomeScreen from './views/Home';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './views/Profile';
import EventScreen from './views/Event';
import ConfirmParticipationScreen from './views/ConfirmParticipation';
import ConfirmCompleteScreen from './views/ConfirmComplete';
import PartnersScreen from './views/Partners'
import EventsInProgressScreen from './views/EventsInProgress';
import EventInProgressScreen from './views/EventInProgress';

const App = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions:{header: null}},
  Profile: {screen: ProfileScreen},
  Event: {screen: EventScreen},
  CameraParticip: {screen: ConfirmParticipationScreen},
  CameraComplete: {screen: ConfirmCompleteScreen},
  Partners: {screen: PartnersScreen},
  EventsInProgress: {screen: EventsInProgressScreen},
  EventInProgress: {screen: EventInProgressScreen}
});

export default App;