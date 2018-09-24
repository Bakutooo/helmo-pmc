import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Camera, Permissions} from 'expo';


export default class ConfirmParticipation extends React.Component{
    constructor(){
        super();
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
                    onBarCodeRead={() => console.log("QRcode readed")}>
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
        } else if (this.state.hasCameraPermission === false){
            return(
                <View>
                    <Text>Pas de permission</Text>
                </View>
            );
        } else if (this.state.hasCameraPermission == null){
            return(
                <View>
                    <Text>Erreur camera</Text>
                </View>
            );
        }
    }
}