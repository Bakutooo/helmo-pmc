import React from 'react';
import {View, Text, FlatList, AsyncStorage, Image, ScrollView} from 'react-native';
import style from './../style';
import ProfileController from './../controllers/ProfileController';

export default class Profile extends React.Component {
    constructor(){
        super();
        this.profileController = new ProfileController(this);
        this.state = {
            user: {
                name: "",
                firstname: "",
                address: "",
                sold: 0,
                missions: []
            }
        }
    }

    static navigationOptions = {
        title: 'Profile'
    }

    componentWillMount(){
        this.getId().then(res => this.profileController.getCurrentUser(res));
    }

    async getId() {
        try {
          return await AsyncStorage.getItem('id_citizen');
        } catch (error) {
          console.error(error);
          return "";
        }
    }
    
    render(){
        return (
            <ScrollView>
                <View style={{padding : 20}}>
                    <Image
                        source={{uri: 'https://via.placeholder.com/150x150'}}
                        style={{width : 150, height : 150, marginTop : 40, alignSelf : 'center'}}
                    /> 

                    <Text style={{fontSize: 17, marginTop : 30, fontWeight : 'bold'}}>Mail :</Text>
                    <Text style={{fontSize: 17, marginBottom : 20}}>{this.state.user.mail}</Text>

                    <Text style={{fontSize: 17, fontWeight : 'bold'}}>Nom de famille :</Text>
                    <Text style={{fontSize: 17, marginBottom : 20}}>{this.state.user.name}</Text>

                    <Text style={{fontSize: 17, fontWeight : 'bold'}}>Prénom :</Text>
                    <Text style={{fontSize: 17, marginBottom : 20}}>{this.state.user.firstname}</Text>

                    <Text style={{fontSize: 17, textAlign : 'center'}}>Solde : {this.state.user.sold} points citoyen</Text>

                    <FlatList
                        data={this.state.user.missions}
                        renderItem={({item}) => <Text style={style.content_row}>{item.name}</Text>}
                    />
                </View>
            </ScrollView>
        );
    }
}