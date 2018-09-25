import React from 'react';
import {View, FlatList, Text, AsyncStorage, TouchableOpacity, DeviceEventEmitter} from 'react-native';
import style from './../style';
import EventsInProgressController from './../controllers/EventsInProgressController';

export default class EventsInProgress extends React.Component {
    
    constructor(){
        super();
        this.controller = new EventsInProgressController(this);
    
        this.state = {
            events: []
        }
    }
    
    static navigationOptions = {
        title: "Événements en cours"
    }

    componentWillMount(){
        DeviceEventEmitter.addListener('update_events_inprogress', () => {
            AsyncStorage.getItem('id_citizen')
                        .then((id) => this.controller.getEvents(id));
        });
        
        AsyncStorage.getItem('id_citizen')
                    .then((id) => this.controller.getEvents(id));
    }

    render(){
        return(
            <View>
                <FlatList
                    data={this.state.events}
                    renderItem={({item}) => (
                        <TouchableOpacity style={style.row} onPress={() => this.controller.goToEvent(item)}>
                            <Text style={style.title_row}>{item.title}</Text>
                            <Text style={style.content_row}>{item.description}</Text>
                        </TouchableOpacity>
                    )}
                >
                </FlatList>
            </View>
        );
    }
}