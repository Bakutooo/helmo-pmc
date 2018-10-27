import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import style from '../style';

import { connect } from "react-redux";
import { fetchPartner } from "./../actions/partnerAction";
import { fetchDealsPartner } from "./../actions/dealAction";

class Partner extends React.Component{
    constructor(props){
        super(props);
        this.init = false;
        this.props.fetchPartner(this.props.navigation.getParam('partner'));
    }

    componentWillReceiveProps(nextProps){
        let dealsInitOrChanged = (!this.init || nextProps.deals.length !== this.props.deals.length);
        if(nextProps.partner !== null && dealsInitOrChanged){
            this.props.fetchDealsPartner(nextProps.partner._id);
            this.init = true;
        }
    }

    static navigationOptions = {
        title: "Deals partenaire"
    }

    render(){
        let { partner, deals } = this.props;
        return(
            <View>
                <View style={style.partner_container}>
                    <Image
                        source={{uri: 'https://via.placeholder.com/100x90'}}
                        style={{width : "30%", height : "100%", margin : 5, alignSelf : 'center'}}
                    />
                    <View>
                        <Text style={style.title_row}>
                            {partner.name}
                        </Text>
                        <Text style={style.normal_info}>
                            Email : {partner.mail}
                        </Text>
                        <Text style={style.normal_info}>
                            Téléphone : {partner.phone}
                        </Text>
                    </View>
                </View>
                <FlatList
                    data={deals}
                    renderItem={({item}) => 
                    <View style={style.row}>
                        <Text style={style.title_row}>{item.name}</Text>
                        <Text style={style.content_row}>Prix : {item.price}</Text>
                    </View>}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    partner: state.partner.partner,
    deals: state.deal.deals,
});

export default connect(mapStateToProps, { fetchPartner, fetchDealsPartner })(Partner);