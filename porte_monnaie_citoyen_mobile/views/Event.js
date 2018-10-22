import React from "react";
import {View, Text, TouchableOpacity, Image, ScrollView, DeviceEventEmitter, AsyncStorage} from 'react-native';
import style from './../style';
import EventController from './../controllers/EventController';

export default class Event extends React.Component {
    constructor(params){
        super();
        this.controller = new EventController(this);

        this.state = {
            citizen: {
                events_inprogress: []
            },
            isVisible: false,
            event: {
                _id: "N/C",
                title: "",
                description: "",
                adress: "",
                gain: 0
            }       
        }
    }

    static navigationOptions = {
        title: "Évenement",
        headerStyle: {backgroundColor: style.header.backgroundColor},
        headerTitleStyle: {color: "white"}
    }

    componentDidMount(){
        DeviceEventEmitter.addListener('participate', () => {
            AsyncStorage.getItem('id_citizen')
            .then(res => this.controller.participate(res));
        });
        AsyncStorage.getItem('id_citizen')
        .then(res => this.controller.getCurrentCitizenEventInProgress(res));
        this.controller.getEvent();
    }

    render(){
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
                        {this.state.event.name}
                    </Text>
                    <Text style={{fontSize: 17, marginBottom: 10}}>
                        {this.state.event.description}
                    </Text>
                    
                
                    <Text style={style.line}/>
                    <Text style={{fontSize: 20, marginBottom: 10}}>Récompense : {this.state.event.gain} PC</Text>
                    <Text style={{fontSize: 20}}>Lieu : {this.state.event.address}</Text>
                    <TouchableOpacity>
                        <Text style={style.button_link}>Voir sur la carte</Text>
                    </TouchableOpacity>

                    <CurrentButton/>
                </View>
            </ScrollView>
        );
    }    
}
