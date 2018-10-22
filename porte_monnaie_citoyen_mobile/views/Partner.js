import React from 'react';
import PartnerController from '../controllers/PartnerController';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import style from '../style';

export default class Partner extends React.Component{
    constructor(params){
        super();

        this.controller = new PartnerController(this);
        this.navigation = params.navigation;

        this.state = {
            image: "",
            name : "",
            mail: "",
            phone: "",
            deals: []
        }
    }

    componentWillMount(){
        this.controller.getPartner();
    }

    static navigationOptions = {
        title: "Deals partenaire",
        headerStyle: {backgroundColor: style.header.backgroundColor},
        headerTitleStyle: {color: "white"}
    }

    render(){
        return(
            <View>
                <View style={style.partner_container}>
                    <Image
                        source={{uri: 'https://via.placeholder.com/100x90'}}
                        style={{width : "30%", height : "100%", margin : 5, alignSelf : 'center'}}
                    />
                    <View>
                        <Text style={style.title_row}>
                            {this.state.name}
                        </Text>
                        <Text style={style.normal_info}>
                            Email : {this.state.mail}
                        </Text>
                        <Text style={style.normal_info}>
                            Téléphone : {this.state.phone}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {this.state.image}
                        </Text>
                    </View>
                </View>
                <FlatList
                    data={this.state.deals}
                    renderItem={({item}) => 
                    <TouchableOpacity style={style.row} key={item._id}>
                        <Text style={style.title_row}>{item.title}</Text>
                        <Text style={style.content_row}>{item.description}</Text>
                        <Text style={style.content_row}>Gagner {item.price} points de communauté !</Text>
                    </TouchableOpacity>}/>
            </View>
        )
    }
}