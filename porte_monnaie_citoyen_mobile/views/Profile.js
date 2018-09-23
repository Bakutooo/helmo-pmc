import React from 'react';
import {View, Text, FlatList, AsyncStorage} from 'react-native';
import style from './../style';
import ProfileController from './../controllers/ProfileController';

export default class Profile extends React.Component {
    constructor(){
        super();
        this.profileController = new ProfileController(this);
        this.state = {
            user: {
                lastname: "",
                firstname: "",
                address: "",
                solde: 0,
                missions: []
            }
        }
    }

    static navigationOptions = {
        title: 'Profile'
    }

    componentWillMount(){
        this.profileController.getCurrentUser(this.getId());
    }

    async getId() {
        try {
          return await AsyncStorage.getItem('id_citizen');
        } catch (error) {
          console.error('AsyncStorage error: ' + error.message);
          return "";
        }
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