import React from "react";
import {View, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import style from './../style';
import EventPresenter from './components/EventPresenter';
import QRScanner from './components/QRScanner';
import MapPresenter from './components/MapPresenter';

import { connect } from "react-redux";
import { fetchEvent, participateEvent } from "./../actions/eventAction";
import { fetchAllParticipationsCitizen } from './../actions/citizenAction';

class Event extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
            mapIsVisible: false,
        }

        this.props.fetchEvent(this.props.navigation.getParam('event'));
        this.props.fetchAllParticipationsCitizen(this.props.citizen._id);
    }

    componentWillReceiveProps(nextProp){
        if(nextProp.event.name !== this.props.event.name){
            this.props.navigation.setOptions({
                headerTitle: nextProp.event.name
            });
        }
    }

    render(){
        let { event, participations, citizen } = this.props;

        console.log(event);

        let CurrentButton = () => (<TouchableOpacity onPress={() => this.setState({isVisible: true})}> 
                                        <Text style={style.button_connection}>Participer</Text>
                                    </TouchableOpacity>)

        participations.forEach((item) => {
            console.log(item.event._id + " === " + event._id);
            if(item.event._id === event._id) CurrentButton = () => (<Text>ACCEPTÉ</Text>);
        });

        return (
            <ScrollView>
                <View style={{padding: 10}}>
                    <EventPresenter event={event} onMap={() => this.setState({mapIsVisible: true})}/>
                    <CurrentButton/>
                </View>
                <Modal
                    animationType="slide"
                    visible={this.state.isVisible}
                    onRequestClose={() => {this.setState({isVisible : false})}}>
                
                    <QRScanner title="Scannez le QRCode pour participer" onQRCodeRead={(data) => {
                        this.setState({isVisible: false});
                        this.props.participateEvent(citizen, event, data);
                        this.props.navigation.goBack();
                    }}/>
                </Modal>
                <Modal
                    animationType="slide"
                    visible={this.state.mapIsVisible}
                    onRequestClose={() => {this.setState({mapIsVisible : false})}}>
                
                    <MapPresenter address={event.address + ", " + event.town.name}/>
                </Modal>
            </ScrollView>
        );
    }    
}

const mapStateToProps = state => ({
    event: state.event.event,
    participations: state.citizen.participations,
    citizen: state.citizen.citizen,
});

export default connect(mapStateToProps, { fetchEvent, fetchAllParticipationsCitizen, participateEvent })(Event);