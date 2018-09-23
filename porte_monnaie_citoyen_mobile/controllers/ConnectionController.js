import server from '../server-info'
import {AsyncStorage} from 'react-native'

export default class ConnectionController{

    constructor(view){
        this.view = view;
    }

    tryConnect(){
        console.log("Trying to connect");
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
            console.log(result);
            if(result.hasOwnProperty('error')){
                this.view.displayErrorMessage(result.error);
            }
            else{
                AsyncStorage.setItem("id_citizen", result._id);
                this.view.goToHome();
            }
        })
    }

    
}