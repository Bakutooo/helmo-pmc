import HomeScreen from './views/Home';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './views/Profile';
import EventScreen from './views/Event';
import ConfirmParticipationScreen from './views/ConfirmParticipation';
import ConfirmCompleteScreen from './views/ConfirmComplete';
import PaymentScreen from './views/Payment';
import PartnersScreen from './views/Partners';
import PartnerScreen from './views/Partner';
import EventsInProgressScreen from './views/EventsInProgress';
import EventInProgressScreen from './views/EventInProgress';

const App = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions:{header: null}},
  Profile: {screen: ProfileScreen},
  Event: {screen: EventScreen},
  CameraParticip: {screen: ConfirmParticipationScreen},
  CameraComplete: {screen: ConfirmCompleteScreen},
  Payment: {screen: PaymentScreen},
  Partners: {screen: PartnersScreen},
  Partner: {screen: PartnerScreen},
  EventsInProgress: {screen: EventsInProgressScreen},
  EventInProgress: {screen: EventInProgressScreen}
});

export default App;