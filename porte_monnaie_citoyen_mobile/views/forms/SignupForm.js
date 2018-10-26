import React, { Component } from 'react';
import { ScrollView, TextInput, TouchableOpacity, Text, Picker, View } from 'react-native';
import DatePicker from "react-native-datepicker";
import style from "./../../style";
import { fetchAllTowns } from "./../../actions/townAction";
import { connect } from "react-redux";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.props.fetchAllTowns();
    this.state = {
        citizen: {
            firstname: "",
            lastname: "",
            birthday: "",
            numNat: "",
            mail: "",
            password: "",
            passwordConfirm: "",
            phone: "",
            address: ""
        },
        town: ""
    };
  }

  componentWillReceiveProps(props){
      this.setState({town: props.towns[0]});
  }

  render() {
      let { towns, onSubmit, onCancel } = this.props;
      let { citizen } = this.state;
    return (
        <ScrollView style={style.form_inscription}>
            <View>
                <Text style={{fontSize : 35, fontWeight : 'bold'}}>Inscription</Text>
                <TextInput
                    placeholder="Prénom..."
                    style={style.input_connection}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({citizen: {...citizen, firstname: text}})}/>

                <TextInput
                    placeholder="Nom..."
                    style={style.input_connection}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({citizen : {...citizen, lastname: text}})}/>

                <DatePicker
                    date={citizen.birthday}
                    onDateChange={(date) => {this.setState({citizen: {...citizen, birthday: date}})}}
                    style={{width: "100%", marginBottom: 10,}}
                    mode="date"
                    placeholder="Entrez votre date de naissance..."
                    format="DD/MM/YYYY"
                    customStyles={{
                        dateInput: {
                            borderBottomWidth: 3,
                            borderColor: "#777777",
                        }
                    }}
                />
                
                <TextInput
                    placeholder="Numéro National..."
                    style={style.input_connection}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({citizen: {...citizen, numNat: text}})}/>

                <TextInput
                    placeholder="Mot de passe..."
                    style={style.input_connection}
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({citizen: {...citizen, password : text}})}/>

                <TextInput
                    placeholder="Confirmer votre mot de passe..."
                    style={style.input_connection}
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({citizen: {...citizen, passwordConfirm : text}})}/>

                <TextInput
                    placeholder="Email..."
                    style={style.input_connection}
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                    onChangeText={(text) => this.setState({citizen: {...citizen, mail : text}})}/>

                <TextInput
                    placeholder="Téléphone..."
                    style={style.input_connection}
                    underlineColorAndroid="transparent"
                    keyboardType="phone-pad"
                    onChangeText={(text) => this.setState({citizen: {...citizen, phone : text}})}/>

                <TextInput
                    placeholder="Rue et Numero..."
                    style={style.input_connection}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({citizen: {...citizen, address : text}})}/>

                <Picker
                    date={this.state.town}
                    style={{width: "100%"}}
                    onValueChange={(value, label) => this.setState({town: value})}
                >
                    {towns.map(town =>(
                        <Picker.Item key={town._id} value={town._id} label={town.name}/>
                    ))}
                </Picker>

                <TouchableOpacity onPress={() => onSubmit({...citizen, town: this.state.town})}>
                    <Text style={style.button_connection}>S'inscrire</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onCancel()}>
                    <Text style={style.button_connection}>Annuler</Text>
                </TouchableOpacity> 
            </View>
        </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
    towns: state.town.towns,
})

export default connect(mapStateToProps, {fetchAllTowns})(SignupForm);
