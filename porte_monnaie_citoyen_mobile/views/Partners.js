import React from 'react';
import {View, 
        TouchableOpacity, 
        Text,
        FlatList
} from 'react-native';
import style from '../style'
import { connect } from "react-redux";
import { fetchAllPartners } from "./../actions/partnerAction";

class Partners extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchAllPartners();
    }

    static navigationOptions = {
        title: "Partenaires"
    }

    render(){
        return (
            <View>
                <FlatList
                    data={this.props.partners}
                    renderItem={({item}) =>
                    <TouchableOpacity style={style.row} onPress={() => this.props.navigation.navigate('Partner', {partner: item._id})}>
                        <Text style={style.title_row}>{item.name}</Text>
                    </TouchableOpacity>}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    partners: state.partner.partners
});

export default connect(mapStateToProps, { fetchAllPartners })(Partners);