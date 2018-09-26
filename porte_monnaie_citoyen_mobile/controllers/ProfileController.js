import server from './../server-info';
export default class ProfileController {

    constructor(view){
        this.view = view;
    }

    getCurrentUser(id){
        fetch(server.url + '/citizen/getById/'+id)
        .then(res => res.json())
        .then(result => this.view.setState({user: result})); 
    }

    


    


}