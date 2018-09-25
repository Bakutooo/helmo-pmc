import React from 'react';
import {View} from 'react-native';
import style from './../style';

export default class About extends React.Component{

    constructor(params){
        this.navigation = params.navigation;
    }

    static navigationOptions = {
        title: 'A propos'
    }

    render(){
        return(
            <View>

            </View>
        );
    }
}