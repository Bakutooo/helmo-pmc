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
        title: "Partenaires",
        headerStyle: {backgroundColor: style.header.backgroundColor},
        headerTitleStyle: {color: "white"}
    }

    render(){
        return (
            <View>
                <FlatList
                    data={this.props.partners}
                    renderItem={({item}) =>
                    <TouchableOpacity style={style.row} onPress={() => console.log("gotoPartner")}>
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