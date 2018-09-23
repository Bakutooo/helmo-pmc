import React from 'react';
import {DeviceEventEmitter} from 'react-native';
import ConnectionScreen from './Connection';
import MissionsScreen from './Missions';

export default class Home extends React.Component {
    
    constructor(){
        super();
        this.state = {
            currentHome: ConnectionScreen
        }
    }

    componentWillMount(){
        DeviceEventEmitter.addListener('connection', () => {
            this.setState({currentHome: MissionsScreen})
        });  
    }

    render(){
        return(
            <this.state.currentHome/>
        );
    }
}