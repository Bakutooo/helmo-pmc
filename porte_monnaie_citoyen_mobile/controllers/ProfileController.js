export default class ProfileController {

    constructor(view){
        this.view = view;
    }

    getCurrentUser(){
        user = {
            lastname: "Pierre",
            firstname: "Bastien",
            address: "Rue du Rêwe 9/1, 4000 Liège",
            solde: 546,
            missions: [
                {key: "1", name: "Mission 1"},
                {key: "2", name: "Mission 2"},
                {key: "3", name: "Mission 3"},
                {key: "4", name: "Mission 4"},
            ]
        };
        
        this.view.setState({user: user});

        /*return retrieveData = async () => {
            try {
              const id = await AsyncStorage.getItem('id');
              if (id !== null) {
                  return this.getUserInDb(id);
              }
             } catch (error) {
               console.log('Erreur dans la variable de session')
             }
          }*/
       
    }


    getUserInDb(id){
        fetch(server.adresse + '/citizen/'+id)
        .then(res => res.json())
        .then(result => resolve(result));  
    }


}