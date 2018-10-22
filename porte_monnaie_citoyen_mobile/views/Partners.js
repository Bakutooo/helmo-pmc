import React from 'react';
import {View, 
        TouchableOpacity, 
        Text,
        Modal,
        FlatList
} from 'react-native';
import style from '../style'
import PartnersController from '../controllers/PartnersController';

export default class Partners extends React.Component{

    constructor(params){
        super();
        this.controller = new PartnersController(this);
        this.navigation = params.navigation;

        this.state = {
            partners: []
        }
    }

    static navigationOptions = {
        title: "Partenaires",
        headerStyle: {backgroundColor: style.header.backgroundColor},
        headerTitleStyle: {color: "white"}
    }

    componentDidMount(){
        this.controller.getAllPartners();
    }

    render(){
        return (
            <View>
                <FlatList
                    data={this.state.partners}
                    renderItem={({item}) =>
                    <TouchableOpacity style={style.row} onPress={() => {this.controller.goToPartner(item)}}>
                        <Text style={style.title_row}>{item.name}</Text>
                    </TouchableOpacity>}/>
            </View>
        )
    }
}