import React from 'react';
import {View, 
        TextInput, 
        TouchableOpacity, 
        Text,
        Modal
} from 'react-native';
import style from '../style'
import SignupForm from "./forms/SignupForm";
import { connect } from "react-redux";
import { fetchCitizen, addCitizen } from "./../actions/citizenAction";

class Connection extends React.Component{
    constructor(){
        super();
        this.state = {
            isVisible : false,
            mail : "",
            password : "",
        }
    }

    render(){
        let { mail, password } = this.state;
        return (
         <View>
                <Text style={{marginTop : 70, fontSize : 35, textAlign : 'center', fontWeight : 'bold'}}>PMC</Text>

                <View style={style.form_connection}>
                    <Text style={{color: "red"}}>{this.props.errorMessage}</Text>
                    <Text style={{color: "green"}}>{this.props.message}</Text>
                    <TextInput
                        placeholder="Entrez votre email..."
                        style={style.input_connection}
                        underlineColorAndroid="transparent"
                        keyboardType="email-address"
                        onChangeText={(text) => this.setState({mail : text})}/>

                    <TextInput
                        placeholder="Entrez votre mot de passe..."
                        style={style.input_connection}
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password : text})}/>

                    <TouchableOpacity onPress={() => this.props.fetchCitizen({mail: mail, password: password})}>
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
                            onSubmit={(citizen) => {
                                this.props.addCitizen(citizen);
                                this.setState({isVisible: false});
                            }}
                            onCancel={() => this.setState({isVisible: false})}
                        />
                    </Modal>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    citizen: state.citizen.citizen,
    errorMessage: state.citizen.error,
    message: state.citizen.message,
})

export default connect(mapStateToProps, {fetchCitizen, addCitizen})(Connection)