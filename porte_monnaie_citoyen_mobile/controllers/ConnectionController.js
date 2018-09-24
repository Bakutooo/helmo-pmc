import server from '../server-info'
import {AsyncStorage} from 'react-native'

export default class ConnectionController{

    constructor(view){
        this.view = view;
    }

    tryConnect(success){
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

    registerNewUser(success){
        if(this.view.state.password !== this.view.state.passwordConfirmation){
            this.view.displayErrorMessage("Les deux mots de passe sont différents !")
        }
        else{
            body = {
                name: this.view.state.name,
                firstname: this.view.state.lastname,
                numNat: this.view.state.nationalNumber,
                mail: this.view.state.email,
                tel: this.view.state.phone,
                password: this.view.state.password
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


        }        
    }
}