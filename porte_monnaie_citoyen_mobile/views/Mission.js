import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import style from './../style';
import MissionController from './../controllers/MissionController';

export default class Mission extends React.Component {

    constructor(params){
        super();
        this.controller = new MissionController(this);

        this.state = {
            mission: {
                title: "",
                description: "",
                adress: "",
                gain: 0
            }       
        }
    }

    componentDidMount(){
        this.controller.getMission();
    }

    render(){
        return (
            <ScrollView>
                <View style={{padding: 20}}>

                    <Image
                        source={require('./../image/megumin.jpg')}
                        style={{width : 230, height : 80, marginTop : 40, alignSelf : 'center'}}
                    />

                    <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center", margin: 15}}>
                        {this.state.mission.title}
                    </Text>
                    <Text style={{fontSize: 15, marginBottom: 10}}>
                        {this.state.mission.description}
                    </Text>
                    
                
                    <Text style={style.line}/>
                    <Text style={{fontSize: 20, marginBottom: 20}}>{this.state.mission.adress}</Text>
                    <Text style={{fontSize: 20, marginBottom: 20}}>{this.state.mission.gain} points citoyen</Text>

                    <TouchableOpacity> 
                        <Text style={style.button}>Effectuer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={style.button}>Google map</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }    
}
