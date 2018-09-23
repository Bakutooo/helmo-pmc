import React from 'react';
import {View, Text, FlatList} from 'react-native';
import style from './../style';

export default class Profile extends React.Component {
    constructor(){
        super();
        this.state = {
            user: {
                lastname: "Pierre",
                firstname: "Bastien",
                address: "Rue du Rêwe 9/1, 4000 Liège",
                solde: 546,
                missions: [
                    {key: "1", name: "Mission 1"},
                    {key: "2", name: "Mission 2"},
                    {key: "3", name: "Mission 3"},
                    {key: "4", name: "Mission 4"},
                ]
            }
        }
    }

    static navigationOptions = {
        title: 'Profile'
    }
    
    render(){
        return (
            <View style={style.profile}>
                <Text style={{fontSize: 40}}>{this.state.user.firstname} {this.state.user.lastname.toUpperCase()}</Text>
                <Text style={{fontSize: 20}}>Solde : {this.state.user.solde} PC</Text>
                <FlatList
                    data={this.state.user.missions}
                    renderItem={({item}) => <Text style={style.content_row}>{item.name}</Text>}
                />
            </View>
        );
    }
}