export default class ProfileController {

    constructor(view){
        this.view = view;
    }

    getCurrentUser(){

        fetch(server.adresse + '/citizen/'+this.getId())
        .then(res => res.json())
        .then(result => resolve(result)); 
        
        this.view.setState({user: user});
    }

    async getId() {
        try {
          return await AsyncStorage.getItem('id_citizen');
        } catch (error) {
          console.error('AsyncStorage error: ' + error.message);
          return "";
        }
    }


    


}