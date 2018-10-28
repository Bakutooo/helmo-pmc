import HomeScreen from './../Events';
import ProfileScreen from './../Profile';
import EventScreen from './../Event';
import PaymentScreen from './../Payment';
import PartnersScreen from './../Partners';
import PartnerScreen from './../Partner';
import EventsInProgressScreen from './../EventsInProgress';
import EventInProgressScreen from './../EventInProgress';
import About from './../About';

import { createStackNavigator } from 'react-navigation';
import { enhance } from "react-navigation-addons-seb";
import style from './../../style';

const AppNav = enhance(createStackNavigator)({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Event: {screen: EventScreen},
    Payment: {screen: PaymentScreen},
    Partners: {screen: PartnersScreen},
    Partner: {screen: PartnerScreen},
    EventsInProgress: {screen: EventsInProgressScreen},
    EventInProgress: {screen: EventInProgressScreen},
    About: {screen: About}
},
{
    navigationOptions: {
        headerStyle: {backgroundColor: style.header.backgroundColor},
        headerTitleStyle: {color: style.header.color}
    }
});

export default AppNav;