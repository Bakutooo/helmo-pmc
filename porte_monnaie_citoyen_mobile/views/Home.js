import React from 'react';
import {DeviceEventEmitter} from 'react-native';
import ConnectionScreen from './Connection';
import EventsScreen from './Events';

export default class Home extends React.Component {
    
    constructor(){
        super();
        this.state = {
            currentHome: ConnectionScreen
        }
    }

    componentWillMount(){
        DeviceEventEmitter.addListener('connection', () => {
            this.setState({currentHome: EventsScreen})
        });  
    }

    render(){
        return(
            <this.state.currentHome navigation={this.props.navigation}/>
        );
    }
}