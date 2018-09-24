import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './../style';

export default class Menu extends React.Component {
    constructor(params){
        super();
        this.navigation = params.navigation;
        this.onPress = params.onPress;
    }

    render(){
        return(
            <View style={style.menu}>
                <TouchableOpacity onPress={() => {
                        this.navigation.navigate('Profile');
                        this.onPress();
                    }}>
                    <Text style={style.button_menu}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{
                    this.navigation.navigate('Partners');
                    this.onPress();
                }}>
                    <Text style={style.button_menu}>Partenaires</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.navigation.navigate('EventInProgress');
                    this.onPress();
                }}>
                    <Text style={style.button_menu}>Évènements en cours</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.button_menu}>À propos</Text>
                </TouchableOpacity>
            </View>
        );
    }
}