import React from "react";
import {View, Text, TouchableOpacity, Image, ScrollView, DeviceEventEmitter} from 'react-native';
import style from './../style';

import { connect } from "react-redux";
import { fetchEvent } from "./../actions/eventAction";

class Event extends React.Component {
    constructor(props){
        super(props);
        this.props.fetchEvent(this.props.navigation.getParam('event'));
        this.state = {
            citizen: {
                events_inprogress: []
            },
            isVisible: false, 
        }
    }

    static navigationOptions = {
        title: "Évenement",
        headerStyle: {backgroundColor: style.header.backgroundColor},
        headerTitleStyle: {color: "white"}
    }

    componentDidMount(){
        DeviceEventEmitter.addListener('participate', () => {
            res => console.log("Participate");
        });
    }

    render(){
        let { event } = this.props;

        let CurrentButton = () => (<TouchableOpacity onPress={() => this.props.navigation.navigate('CameraParticip')}> 
                                        <Text style={style.button_connection}>Participer</Text>
                                    </TouchableOpacity>)

        this.state.citizen.events_inprogress.forEach((item) => {
            console.log(item._id + " /// " + this.state.event._id);
            if(item._id === this.state.event._id) CurrentButton = () => (<Text>ACCEPTÉ</Text>);
        });

        return (
            <ScrollView>
                <View style={{padding: 10}}>

                    <Image
                        source={{uri: 'https://via.placeholder.com/300x120'}}
                        style={{width : "100%", height : 150, margin : 5, alignSelf : 'center'}}
                    />

                    <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center", margin: 15}}>
                        {event.name}
                    </Text>
                    <Text style={{fontSize: 17, marginBottom: 10}}>
                        {event.description}
                    </Text>
                    
                
                    <Text style={style.line}/>
                    <Text style={{fontSize: 20, marginBottom: 10}}>Récompense : {event.gain} PC</Text>
                    <Text style={{fontSize: 20}}>Lieu : {event.address}</Text>
                    <TouchableOpacity>
                        <Text style={style.button_link}>Voir sur la carte</Text>
                    </TouchableOpacity>

                    <CurrentButton/>
                </View>
            </ScrollView>
        );
    }    
}

const mapStateToProps = state => ({
    event: state.event.event,
});

export default connect(mapStateToProps, { fetchEvent })(Event);