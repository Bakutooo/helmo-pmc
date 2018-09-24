import HomeScreen from './views/Home';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './views/Profile';
import EventScreen from './views/Event';
import ConfirmParticipationScreen from './views/ConfirmParticipation';
import PartnersScreen from './views/Partners';
import PartnerScreen from './views/Partner';

const App = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions:{header: null}},
  Profile: {screen: ProfileScreen},
  Event: {screen: EventScreen},
  CameraParticip: {screen: ConfirmParticipationScreen},
  Partners: {screen: PartnersScreen},
  Partner: {screen: PartnerScreen}
});

export default App;