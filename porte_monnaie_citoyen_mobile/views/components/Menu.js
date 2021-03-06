import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../style';
import { connect } from "react-redux";
import { logoutCitizen } from "../../actions/citizenAction";

class Menu extends React.Component {
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
                    <Text style={style.button_menu}>Profil</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{
                    this.navigation.navigate('Partners');
                    this.onPress();
                }}>
                    <Text style={style.button_menu}>Partenaires</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.navigation.navigate('Payment');
                    this.onPress();
                }}>
                    <Text style={style.button_menu}>Paiement</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.navigation.navigate('EventsInProgress');
                    this.onPress();
                }}>
                    <Text style={style.button_menu}>Évènements en cours</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{
                    this.navigation.navigate('About');
                    this.onPress();
                }}>
                    <Text style={style.button_menu}>À propos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.logoutCitizen()}>
                    <Text style={style.button_menu}>Se déconnecter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, {logoutCitizen})(Menu);