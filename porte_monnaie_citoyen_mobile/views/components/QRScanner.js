import React, { Component } from 'react';
import {View, Text} from 'react-native';
import style from './../../style';
import {BarCodeScanner, Permissions} from 'expo';

class QRScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
        }
    }
  
    async componentWillMount(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }

    render(){
        if(this.state.hasCameraPermission === true){
            return(
                <View style={{ flex: 1 }}>
                    <View style={{height: "7%", backgroundColor: style.header.backgroundColor}}>
                        <Text style={{marginLeft: 10, marginTop: 10, fontWeight: "bold",fontSize: 21, color: style.header.color}}>{this.props.title}</Text>
                    </View>
                    <BarCodeScanner style={{width: "100%", height:"93%"}}
                        onBarCodeRead={({data}) => this.props.onQRCodeRead(data)}/>
                </View>
            );
        } else {
            return(
                <View>
                    <Text Style={{fontSize : 25, textAlign : 'center', fontWeight : 'bold'}}>Pas de permission</Text>
                </View>
            );
        } 
    }
}

export default QRScanner;
