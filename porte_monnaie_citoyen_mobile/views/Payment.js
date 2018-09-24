import React from 'react';
import {View, AsyncStorage, Text, StyleSheet} from 'react-native';
import {BarCodeScanner, Permissions} from 'expo';
import ConfirmParticipationController from './../controllers/ConfirmParticipationController';
import style from './../style';

export default class Payment extends React.Component {
    constructor(){
        super();
        this.controller = new ConfirmParticipationController(this);

        this.state = {
            transaction: null,
            sender: "",
            done: null,
            hasCameraPermission: null,
        }
    }
    
    static navigationOptions = {
        title: "Scannez le QRcode"
    }

    async componentWillMount(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'}); 
        AsyncStorage.getItem('id_citizen')
        .then(res => this.setState({sender: res}));
    }

    render(){
        if(this.state.hasCameraPermission === true){
            if(this.state.done === null){
                return(
                    <View style={{ flex: 1 }}>
                      <BarCodeScanner style={StyleSheet.absoluteFill}
                        onBarCodeRead={({data}) => this.controller.testQRPayment(
                            data, 
                            () => {
                                this.setState({done: true});
                            }
                        )}/>
                </View>
                );
            } else if (this.state.done === true){
                return(
                    <View style={{ flex: 1 }}>
                        <Text style={style.title_row}>Créditeur : {this.state.transaction.sender.firstname} {this.state.transaction.sender.name}</Text>
                        <Text style={style.title_row}>Débiteur : {this.state.transaction.receiver.name}</Text>
                        <Text style={style.title_row}>Montant : {this.state.transaction.amount}</Text>
                    </View>
                );
            } else if (this.state.done === false){
                return(
                    <View style={{ flex: 1 }}>
                    <Text>NOK</Text>
                    </View>
                );
            }
            
        } else {
            return(
                <View>
                    <Text>Pas de permission</Text>
                </View>
            );
        }
    }
}