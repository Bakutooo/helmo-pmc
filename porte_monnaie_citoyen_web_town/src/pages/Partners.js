import React, { Component } from 'react'
import PartnerShort from './components/PartnerShort'
import PartnerLong from './components/PartnerLong'

export default class Partners extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            acceptedPartners : [
                {id : 1, name : "La ruche qui dit oui", mail : "laruche@quidit.oui", phone : "+3256894520", state : "A"},
                {id : 2, name : "Jupiler", mail : "jupiler@biere.be", phone : "+32455688920", state : "A"},
                {id : 3, name : "Radio contact", mail : "radio@contact.be", phone : "+3256665544", state : "A"},
                {id : 4, name : "La ruche qui dit oui", mail : "laruche@quidit.oui", phone : "+3256894520", state : "A"}
            ],
            waitingPartners : [
                {id : 5, name : "HELMo", mail : "helmo@helmo.be", phone : "+3265656565", state : "W"},
                {id : 6, name : "HELMo", mail : "helmo@helmo.be", phone : "+3265656565", state : "W"},
                {id : 7, name : "HELMo", mail : "helmo@helmo.be", phone : "+3265656565", state : "W"},
                {id : 8, name : "HELMo", mail : "helmo@helmo.be", phone : "+3265656565", state : "W"}
            ]
        }
    }

    renderWaitingPartners(){
        return (
            <div className="d-flex flex-row flex-wrap justify-content-between p-2">
                {this.state.waitingPartners.map((item, index) => 
                    (item = <PartnerShort data={item} />)
                )}
            </div>
        )
    }
    
    renderAcceptedPartners(){
        return (
            <div className="d-flex flex-row flex-wrap justify-content-between p-2">
                {this.state.acceptedPartners.map((item, index) => 
                    (item = <PartnerLong data={item} />)
                )}
            </div>
        )
    }
    
    render() {
        return (
            <div className="row w-75">
                <div className="w-75 p-3 event-demande">
                    <h4>Evènements :</h4>
                    {this.renderAcceptedPartners()}
                </div>
                <div className="w-25 p-3">
                    <h4>Demandes d'évènement :</h4>
                    {this.renderWaitingPartners()}
                </div>
            </div>
        )
    }
}
