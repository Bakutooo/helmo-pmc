import React from 'react';
import PartnerController from '../controllers/PartnerController';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
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

    render(){
        return(
            <View>
                <View style={style.partner_container}>
                    <View>
                        <Text style={style.title_row}>
                            {this.state.name}
                        </Text>
                        <Text style={style.normal_info}>
                            {this.state.mail}
                        </Text>
                        <Text style={style.normal_info}>
                            {this.state.phone}
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
                    <TouchableOpacity style={style.row} onPress={() => {this.controller.goToEvent(item)}}>
                        <Text style={style.title_row}>{item.title}</Text>
                        <Text style={style.content_row}>{item.description}</Text>
                        <Text>{item.price}</Text>
                    </TouchableOpacity>}/>
            </View>
        )
    }
}