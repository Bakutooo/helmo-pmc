import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import QRScanner from './components/QRScanner';
import style from './../style';

export default class Payment extends React.Component {
    constructor(){
        super();
        this.state = {
            isVisible: false
        }
    }

    static navigationOptions = {
        headerTitle: "Paiement"
    }

    render(){
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
                
                    <QRScanner title="Scannez le QRCode pour la paiement" onQRCodeRead={(data) => console.log(data)}/>
                </Modal>
            </View>
        )
    }
}