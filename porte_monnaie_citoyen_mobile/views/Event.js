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
        title: "Évenement"
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
                                        <Text style={style.button}>Participer</Text>
                                    </TouchableOpacity>)

        this.state.citizen.events_inprogress.forEach((item) => {
            console.log(item._id + " /// " + this.state.event._id);
            if(item._id === this.state.event._id) CurrentButton = () => (<Text>ACCEPTÉ</Text>);
        });

        return (
            <ScrollView>
                <View style={{padding: 10}}>

                    <Image
                        //source={require('./../image/megumin.jpg')}
                        source={{uri: 'https://via.placeholder.com/200x100'}}
                        style={{width : 200, height : 100, marginTop : 20, alignSelf : 'center'}}
                    />

                    <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center", margin: 15}}>
                        {this.state.event.title}
                    </Text>
                    <Text style={{fontSize: 17, marginBottom: 10}}>
                        {this.state.event.description}
                    </Text>
                    
                
                    <Text style={style.line}/>
                    <Text style={{fontSize: 20, marginBottom: 20, textAlign : 'center'}}>{this.state.event.adress}</Text>
                    <Text style={{fontSize: 20, marginBottom: 20, textAlign : 'center'}}>{this.state.event.gain} points citoyen</Text>

                    <CurrentButton/>
                    <TouchableOpacity>
                        <Text style={style.button}>Google map</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }    
}
