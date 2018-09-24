import React from 'react';
import {View, DeviceEventEmitter, Text} from 'react-native';
import {Camera, Permissions} from 'expo';
import ConfirmParticipationController from './../controllers/ConfirmParticipationController';

export default class ConfirmComplete extends React.Component{
    constructor(){
        super();
        this.controller = new ConfirmParticipationController(this);

        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back
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
                  <Camera style={{ flex: 1 }} type={this.state.type}
                    onBarCodeRead={({data}) => this.controller.testQR(data, () => DeviceEventEmitter.emit('complete'))}>
                        <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                        </View>
                    </Camera>
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