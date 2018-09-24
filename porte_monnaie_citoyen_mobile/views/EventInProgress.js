import React from 'react';
import {View, ScrollView, Image, Text, DeviceEventEmitter, AsyncStorage, TouchableOpacity} from 'react-native';
import style from './../style';
import EventController from './../controllers/EventController';

export default class EventsInProgress extends React.Component {
    constructor(params){
        super();
        this.controller = new EventController(this);

        this.state = {
            isVisible: false,
            event: {
                title: "",
                description: "",
                adress: "",
                gain: 0
            }       
        }
    }

    componentDidMount(){
        DeviceEventEmitter.addListener('complete', () => {
            AsyncStorage.getItem('id_citizen')
            .then(id => {
                this.controller.complete(id, this.state.event._id, () => DeviceEventEmitter.emit('update_events_inprogress'));
            });
        });
        this.controller.getEvent();
    }

    render(){
        return (
            <ScrollView>
                <View style={{padding: 10}}>

                    <Image
                        source={require('./../image/megumin.jpg')}
                        style={{width : 230, height : 80, marginTop : 20, alignSelf : 'center'}}
                    />

                    <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center", margin: 15}}>
                        {this.state.event.title}
                    </Text>
                    <Text style={{fontSize: 15, marginBottom: 10}}>
                        {this.state.event.description}
                    </Text>
                    
                
                    <Text style={style.line}/>
                    <Text style={{fontSize: 20, marginBottom: 20}}>{this.state.event.adress}</Text>
                    <Text style={{fontSize: 20, marginBottom: 20}}>{this.state.event.gain} points citoyen</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CameraComplete')}> 
                        <Text style={style.button}>Completer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={style.button}>Google map</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}