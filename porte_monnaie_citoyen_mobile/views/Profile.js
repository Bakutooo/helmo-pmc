import React from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import { connect } from "react-redux";
import { fetchCitizen } from "./../actions/citizenAction";

class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profil'
    }
    
    render(){
        console.log(this.props.citizen);
        let citizen = this.props.citizen;
        return (
            <ScrollView>
                <View style={{padding : 10}}>
                    <View style={{flexDirection: "row"}}>
                        <Image
                            source={{uri: 'https://via.placeholder.com/150x150'}}
                            style={{width : 150, height : 150, margin : 5}}
                        />
                        <View>
                            <Text style={{fontSize: 22, fontWeight : 'bold'}}>{citizen.firstname} {citizen.lastname.toUpperCase()}</Text>
                            <Text style={{fontStyle: "italic"}}>{citizen.numNat}</Text>
                            <Text style={{marginBottom: 20}}>{new Date(citizen.birthday).toLocaleDateString("en-GB")}</Text>
                            <Text style={{fontSize: 22, fontWeight : 'bold'}}>Point citoyen : {citizen.points}</Text>
                        </View>
                    </View>
                    <Text>{citizen.address}</Text>
                    <Text style={{marginBottom: 15}}>{citizen.town.name}</Text>
                    
                    <Text>Tel: {citizen.phone}</Text>
                    <Text style={{marginBottom: 15}}>Email: {citizen.mail}</Text>
                    
                    <Text style={{fontSize: 22, fontWeight : 'bold'}}>Activités :</Text>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    citizen: state.citizen.citizen
});

export default connect(mapStateToProps, { fetchCitizen })(Profile);