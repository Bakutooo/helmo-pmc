import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import QRScanner from './components/QRScanner';
import style from './../style';
import { buyDeal } from "./../actions/dealAction";
import { connect } from "react-redux";

class Payment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        }
    }

    static navigationOptions = {
        headerTitle: "Paiement"
    }

    render(){
        let { citizen } = this.props;

        return (
            <View>
                <TouchableOpacity onPress={() => this.setState({isVisible: true})} style={{margin: 5}}>
                    <Text style={style.button_connection}>Scanner le QRCode</Text>
                </TouchableOpacity>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.isVisible}
                    onRequestClose={() => {this.setState({isVisible : false})}}>
                
                    <QRScanner title="Scannez le QRCode pour la paiement" onQRCodeRead={(data) => this.props.buyDeal(citizen, data)}/>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    citizen: state.citizen.citizen
});

export default connect(mapStateToProps, { buyDeal })(Payment);