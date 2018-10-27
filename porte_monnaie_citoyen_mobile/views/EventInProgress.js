import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, Modal} from 'react-native';
import style from './../style';
import EventPresenter from "./components/EventPresenter";
import QRScanner from './components/QRScanner';

import { connect } from "react-redux";
import { fetchParticipationCitizen } from "./../actions/citizenAction";

class EventInProgress extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        }
        this.props.fetchParticipationCitizen(this.props.navigation.getParam('event'));
    }

    componentWillReceiveProps(nextProp){
        if(nextProp.participation.event.name !== this.props.participation.event.name){
            this.props.navigation.setOptions({
                headerTitle: nextProp.participation.event.name
            });
        }
    }

    render(){
        let { event } = this.props.participation;
        return (
            <ScrollView>
                <View style={{padding: 10}}>
                    <EventPresenter event={event}/>
                    <TouchableOpacity onPress={() => this.setState({isVisible: true})}> 
                        <Text style={style.button_connection}>Completer</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.isVisible}
                    onRequestClose={() => {this.setState({isVisible : false})}}>
                
                    <QRScanner title="Scannez le QRCode pour completer" onQRCodeRead={(data) => console.log(data)}/>
                </Modal>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    participation: state.citizen.participation
}); 

export default connect(mapStateToProps, { fetchParticipationCitizen })(EventInProgress);