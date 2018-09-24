import React from 'react';
import {View, FlatList, Text, AsyncStorage, TouchableOpacity} from 'react-native';
import style from './../style';
import EventInProgressController from './../controllers/EventInProgressController';

export default class EventInProgress extends React.Component {
    
    constructor(){
        super();
        this.controller = new EventInProgressController(this);
    
        this.state = {
            events: []
        }
    }
    
    componentWillMount(){
        AsyncStorage.getItem('id_citizen')
                    .then((id) => this.controller.getEvents(id));
    }

    render(){
        return(
            <View>
                <FlatList
                    data={this.state.events}
                    renderItem={({item}) => (
                        <TouchableOpacity style={style.row}>
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