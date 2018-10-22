import server from '../server-info'
import {AsyncStorage} from 'react-native'

export default class ConnectionController{
    constructor(view){
        this.view = view;
    }

    connection(success){
        body = {
            "mail": this.view.state.connectionEmail,
            "password": this.view.state.connectionPassword
        };
        fetch(server.url + "/citizen/connection", {
            method : "POST",
            body : JSON.stringify(body),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(result => result.json())
        .then(result => {
            if(result.hasOwnProperty('error')){
                this.view.displayErrorMessage(result.error);
            }
            else{
                AsyncStorage.setItem("id_citizen", result._id).then(res => success());
            }
        })
    }

    signup({firstname, lastname, mail, numNat, password, passwordConfirm, phone, birthday, address, town}, success){
        if(password !== passwordConfirm){
            this.view.displayErrorMessage("Les deux mots de passe sont différents !")
        }
        else{
            body = {
                firstname: firstname,
                lastname: lastname,
                mail: mail,
                numNat: numNat,
                password: password,
                phone: phone,
                birthday: birthday,
                address: address,
                town: town
            };

            console.log(body);

            fetch(server.url + "/citizen", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then(result => result.json())
            .then(result => {
                if(result.hasOwnProperty("error")){
                    this.view.displayErrorMessage(result.error);
                }
                else{
                    AsyncStorage.setItem("id_citizen", result._id);
                    success();
                }
            })
            .catch(err => console.log(err));
        }        
    }

    fetchTowns(){
        fetch(server.url + "/town")
        .then(res => res.json())
        .then(res => this.view.setState({towns: res}))
        .catch(err => console.log(err));
    }
}