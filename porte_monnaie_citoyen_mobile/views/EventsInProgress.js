import React from 'react';
import {View, FlatList} from 'react-native';
import EventRow from './components/EventRow';

import { connect } from "react-redux";
import { fetchAllParticipationsCitizen } from "./../actions/citizenAction";

class EventsInProgress extends React.Component {
    constructor(props){
        super(props);
        this.props.fetchAllParticipationsCitizen(this.props.citizen._id);
    }
    
    static navigationOptions = {
        title: "Événements en cours"
    }

    render(){
        return(
            <View>
                <FlatList
                    data={this.props.events}
                    renderItem={({item}) => (
                        <EventRow 
                            event={item.event}
                            onClick={() => this.props.navigation.navigate('EventInProgress', {event: item._id})}/>    
                    )}
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

export default connect(mapStateToProps, { fetchAllParticipationsCitizen })(EventsInProgress);