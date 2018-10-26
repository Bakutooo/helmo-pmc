import React from 'react';
import {View, FlatList, Text, TouchableOpacity, DeviceEventEmitter, Image} from 'react-native';
import style from './../style';

import { connect } from "react-redux";
import { fetchParticipationCitizen } from "./../actions/citizenAction";

class EventsInProgress extends React.Component {
    
    constructor(props){
        super(props);
        this.props.fetchParticipationCitizen(this.props.citizen._id);
    }
    
    static navigationOptions = {
        title: "Événements en cours",
        headerStyle: {backgroundColor: style.header.backgroundColor},
        headerTitleStyle: {color: "white"}
    }

    componentWillMount(){
        DeviceEventEmitter.addListener('update_events_inprogress', () => {
            console.log("update_events_inprogress")
        });
    }

    render(){
        return(
            <View>
                <FlatList
                    data={this.props.events}
                    renderItem={({item}) => 
                    <TouchableOpacity 
                        key={item._id} 
                        style={style.row} 
                        onPress={() => console.log("gotoEvent")}
                    >
                        <Image
                            source={{uri: 'https://via.placeholder.com/300x120'}}
                            style={{width: "100%", height:150}}
                        />
                        <Text style={style.title_row}>{item.event.name}</Text>
                        <Text style={style.content_row}>{new Date(item.event.date).toLocaleDateString()}</Text>
                    </TouchableOpacity>}
                >
                </FlatList>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    citizen: state.citizen.citizen,
    events: state.citizen.participations,
});

export default connect(mapStateToProps, { fetchParticipationCitizen })(EventsInProgress);