import React from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import { connect } from "react-redux";
import { fetchCitizen, refreshCitizen, fetchAllPaymentsCitizen } from "./../actions/citizenAction";

class Profile extends React.Component {

    componentWillMount(){
        this.props.refreshCitizen(this.props.citizen._id);
        this.props.fetchAllPaymentsCitizen(this.props.citizen._id);        
    }

    static navigationOptions = {
        title: 'Profil'
    }
    
    render(){
        let { citizen } = this.props;
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
                    
                    <Text style={{fontSize: 22, fontWeight : 'bold'}}>Achats :</Text>
                    <FlatList
                        data={this.props.payments}
                        renderItem={({item}) => (
                            <View key={item._id} style={{width:"100%", justifyContent: "space-between", flexDirection: "row"}}>
                                <Text style={{fontSize: 25}}>{item.deal.name}</Text>
                                <Text style={{fontSize: 25, color: "red"}}>-{item.deal.price}</Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    citizen: state.citizen.citizen,
    payments: state.citizen.payments
});

export default connect(mapStateToProps, { fetchCitizen, refreshCitizen, fetchAllPaymentsCitizen })(Profile);