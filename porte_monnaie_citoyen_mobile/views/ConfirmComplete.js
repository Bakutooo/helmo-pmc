import React from 'react';
import {View, DeviceEventEmitter, Text, StyleSheet} from 'react-native';
import {BarCodeScanner, Permissions} from 'expo';
import ConfirmParticipationController from './../controllers/ConfirmParticipationController';

export default class ConfirmComplete extends React.Component{
    constructor(){
        super();
        this.controller = new ConfirmParticipationController(this);

        this.state = {
            hasCameraPermission: null,
        }
    }
    
    static navigationOptions = {
        title: "Scannez le QRcode"
    }

    async componentWillMount(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }

    render(){
        if(this.state.hasCameraPermission === true){
            return(
                <View style={{ flex: 1 }}>
                  <BarCodeScanner style={StyleSheet.absoluteFill}
                    onBarCodeRead={({data}) => this.controller.testQREvenement(data, () => DeviceEventEmitter.emit('complete'))}/>
                </View>
            );
        } else {
            return(
                <View>
                    <Text>Pas de permission</Text>
                </View>
            );
        } 
    }
}