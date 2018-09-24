import server from "../server-info";

export default class PartnerController{
    constructor(view) {
        this.view = view;
    }

    getPartner(){
        partner = this.view.props.navigation.getParam("partner");
        this.view.setState({
            name: partner.name,
            phone: partner.tel,
            mail: partner.mail,
            deals: partner.deals
        });
    }
}