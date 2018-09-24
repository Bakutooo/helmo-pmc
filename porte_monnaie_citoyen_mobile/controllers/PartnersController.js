import server from '../server-info';

export default class PartnersController{
    
    constructor(view){
        this.view = view;
    }

    getAllPartners(){
        fetch(server.url + '/partner')
        .then(res => res.json())
        .then((res) => {
            res.forEach(element => {
               element.key = element._id; 
            });
            this.view.setState({partners: res});
        });
    }

    goToPartner(partner){
        this.view.navigation.navigate('Partner', {partner: partner});
    }
}