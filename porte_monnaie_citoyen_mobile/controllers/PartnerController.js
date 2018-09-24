import server from "../server-info";

export default class PartnerController{
    constructor(view) {
        this.view = view;
    }

    getPartner(){
        this.view.setState({
            partner: this.view.navigation.getParam("Partner")
        })
    }
}