import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './../style';

export default class About extends React.Component{

    constructor(params){
        super();
        this.navigation = params.navigation;
    }

    static navigationOptions = {
        title: 'A propos'
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
                <Image style={{width: 350, height: 350, marginTop:5}} source={require('./../image/girafe-logo.png')}/>
                <Text style={{fontWeight: 'bold', fontSize: 35}}>Made by Girafes</Text>
            </View>
        );
    }
}