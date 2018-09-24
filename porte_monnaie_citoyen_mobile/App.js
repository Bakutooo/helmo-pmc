import HomeScreen from './views/Home';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './views/Profile';
import EventScreen from './views/Event';
import ConfirmParticipationScreen from './views/ConfirmParticipation';
import PartnersScreen from './views/Partners';
import PartnerScreen from './views/Partner';
import ConfirmCompleteScreen from './views/ConfirmComplete';
import EventsInProgressScreen from './views/EventsInProgress';
import EventInProgressScreen from './views/EventInProgress';

const App = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions:{header: null}},
  Profile: {screen: ProfileScreen},
  Event: {screen: EventScreen},
  CameraParticip: {screen: ConfirmParticipationScreen},
  Partners: {screen: PartnersScreen},
  Partner: {screen: PartnerScreen},
  CameraComplete: {screen: ConfirmCompleteScreen},
  EventsInProgress: {screen: EventsInProgressScreen},
  EventInProgress: {screen: EventInProgressScreen}
});

export default App;