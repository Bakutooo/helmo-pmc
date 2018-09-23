import React from 'react';
import {View, 
        TextInput, 
        TouchableOpacity, 
        Text,
        Modal,
        ScrollView
} from 'react-native';
import style from '../style'
import ConnectionController from '../controllers/ConnectionController';

export default class Connection extends React.Component{

    constructor(){
        super();

        this.state = {
            isVisible : false,
            connectionEmail : "",
            connectionPassword : "",
            email : "",
            name : "",
            lastname : "",
            password : "",
            passwordConfirmation : "",
            nationalNumber : "",
            phone : "",
            errorMessage: ""
        }

        this.controller = new ConnectionController(this);
    }

    displayErrorMessage(error){
        this.setState({errorMessage: error});
    }

    goToHome(){
        this.props.navigation.navigate('Home');
    }

    render(){
        return (
            <View style={style.form_connection}>
                <Text style={{color: "red"}}>{this.state.errorMessage}</Text>
                <Text>
                    Email
                </Text>
                <TextInput
                    style={style.input}
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                    onChangeText={(text) => this.setState({connectionEmail : text})}/>

                <Text>
                    Mot de passe
                </Text>
                <TextInput
                    style={style.input}
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({connectionPassword : text})}/>
                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}> */}
                <TouchableOpacity onPress={() => this.controller.tryConnect()}>
                    <Text style={style.button}>
                        Connexion
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.setState({isVisible : true})}>
                    <Text style={style.button}>
                        Inscription
                    </Text>
                </TouchableOpacity>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isVisible}
                    onRequestClose={() => {this.setState({isVisible : false})}}>

                    <ScrollView style={style.form_inscription}>
                        <Text>Nom</Text>
                        <TextInput
                            style={style.input}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({name : text})}/>

                        <Text>Prénom</Text>
                        <TextInput
                            style={style.input}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({lastname : text})}/>

                        <Text>Mot de passe</Text>
                        <TextInput
                            style={style.input}
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({password : text})}/>

                        <Text>Confirmer mot de passe</Text>
                        <TextInput
                            style={style.input}
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({passwordConfirmation : text})}/>

                        <Text>N° national</Text>
                        <TextInput
                            style={style.input}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({nationalNumber : text})}/>

                        <Text>Email</Text>
                        <TextInput
                            style={style.input}
                            underlineColorAndroid="transparent"
                            keyboardType="email-address"
                            onChangeText={(text) => this.setState({email : text})}/>

                        <Text>Téléphone</Text>
                        <TextInput
                            style={style.input}
                            underlineColorAndroid="transparent"
                            keyboardType="phone-pad"
                            onChangeText={(text) => this.setState({phone : text})}/>

                        <TouchableOpacity onPress={() => this.setState({isVisible : false})}>
                            <Text style={style.button}>S'inscrire</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({isVisible : false})}>
                            <Text style={style.button}>Annuler</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </Modal>
            </View>
        )
    }
}