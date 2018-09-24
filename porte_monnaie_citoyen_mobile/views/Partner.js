import React from 'react';
import PartnerController from '../controllers/PartnerController';
import {Text} from 'react-native';

export default class Partner extends React.Component{
    constructor(params){
        super();

        this.controller = new PartnerController(this);
        this.navigation = params.navigation;

        this.state = {
            partner = {
                name : "",
                mail : "",
                phone : "",
                password : "",
                deals : []
            }
        }
    }

    componentDidMount(){
        this.controller.getPartner();
    }

    render(){
        return(
            <Text>
                {this.state.partner}
            </Text>
        )
    }
}