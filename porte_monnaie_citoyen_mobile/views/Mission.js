import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import style from './../style';

export default class Mission extends React.Component {

    constructor(params){
        super();

        this.state = {
            title : "Feuille morte",
            description : "",
            adress : "",
            lattitude : "",
            longitude : "", 
            reward : 0.0,
            prority : 0, 
            status : "",
            date_start : new Date(),
            date_end : new Date()          
        }
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
                        {this.state.title}
                    </Text>
                    <Text style={{fontSize: 15, marginBottom: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec ut egestas sem, id finibus odio. Ut tempor justo id lorem laoreet,
                        non venenatis erat vulputate. Proin finibus dui id nulla venenatis,
                        eget lacinia est egestas. Nullam congue consectetur mauris vel maximu. 
                    </Text>
                    
                
                    <Text style={style.line}/>
                    <Text style={{fontSize: 20, marginBottom: 20}}>Rue de la régence, 23 Liège</Text>
                    <Text style={{fontSize: 20, marginBottom: 20}}>10 points en récompense !</Text>

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
