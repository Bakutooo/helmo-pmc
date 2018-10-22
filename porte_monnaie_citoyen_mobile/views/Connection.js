import React from 'react';
import {View, 
        TextInput, 
        TouchableOpacity, 
        Text,
        Modal,
        DeviceEventEmitter
} from 'react-native';
import style from '../style'
import ConnectionController from '../controllers/ConnectionController';
import SignupForm from "./forms/SignupForm";

export default class Connection extends React.Component{

    constructor(){
        super();
        
        this.state = {
            isVisible : false,
            connectionEmail : "",
            connectionPassword : "",
            errorMessage: "",
            towns: [],
        }

        this.controller = new ConnectionController(this);
    }

    componentWillMount(){
        this.controller.fetchTowns();
    }

    displayErrorMessage(error){
        this.setState({errorMessage: error});
    }

    render(){
        return (
         <View>
                <Text style={{marginTop : 70, fontSize : 35, textAlign : 'center', fontWeight : 'bold'}}>PMC</Text>

                <View style={style.form_connection}>
                    <Text style={{color: "red"}}>{this.state.errorMessage}</Text>
                    <TextInput
                        placeholder="Entrez votre email..."
                        style={style.input_connection}
                        underlineColorAndroid="transparent"
                        keyboardType="email-address"
                        onChangeText={(text) => this.setState({connectionEmail : text})}/>

                    <TextInput
                        placeholder="Entrez votre mot de passe..."
                        style={style.input_connection}
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({connectionPassword : text})}/>

                    <TouchableOpacity onPress={() => this.controller.connection(() => DeviceEventEmitter.emit('connection'))}>
                        <Text style={style.button_connection}>
                            Connexion
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({isVisible : true})}>
                        <Text style={style.button_link}>
                            Inscription
                        </Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.isVisible}
                        onRequestClose={() => {this.setState({isVisible : false})}}>

                        <SignupForm
                            onSubmit={(citizen) => this.controller.signup(citizen, () => {this.setState({isVisible: false})})}
                            onCancel={() => this.setState({isVisible: false})}
                            towns={this.state.towns}
                        />
                    </Modal>
                </View>
            </View>
        )
    }
}