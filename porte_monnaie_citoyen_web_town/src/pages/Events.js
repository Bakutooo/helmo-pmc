import React, { Component } from 'react';
import Event from './components/Event';

export default class Events extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            eventsAccepted : [
                {id : 1, name : 'Fête de la bière', date : '21/12/2012', image : 'placeholder.png', address : "Rue de la bière n°85", description : "Venez boire des bonnes bières", state : "A"},
                {id : 2, name : 'Fête de la musique', date : '31/10/2018', image : 'placeholder.png', state : "A"},
                {id : 3, name : 'Retro MIA', date : '31/10/2018', image : 'placeholder.png', state : "A"},
                {id : 4, name : 'Salon de l\'auto', date : '31/10/2018', image : 'placeholder.png', state : "A"}
            ],
            eventsWaiting : [
                {id : 5, name : 'Fête de la bière', date : '21/12/2012', image : 'placeholder.png', address : "Rue de la bière n°85", description : "Venez boire des bonnes bières", state : "W"},
                {id : 6, name : 'Fête de la musique', date : '31/10/2018', image : 'placeholder.png', state : "W"},
                {id : 7, name : 'Retro MIA', date : '31/10/2018', image : 'placeholder.png', state : "W"}
            ]
        };
    }

    renderEventsAccepted(){
        return (
            <div className="d-flex flex-row flex-wrap justify-content-between p-2">
                {this.state.eventsAccepted.map((item, index) => (
                    item = <Event data={item} />
                ))}
            </div>
        )
    }

    renderEventsWaiting(){
        return (
            <div className="d-flex flex-row flex-wrap justify-content-between p-2">
                {this.state.eventsWaiting.map((item, index) => (
                    item = <Event data={item} />
                ))}
            </div>
        )
    }
    
    render() {
        return (
            <div className="row w-75">
                <div className="w-75 p-3 event-demande">
                    <h4>Evènements :</h4>
                    {this.renderEventsAccepted()}
                </div>
                <div className="w-25 p-3">
                    <h4>Demandes d'évènement :</h4>
                    {this.renderEventsWaiting()}
                </div>
            </div>
        )
    }
}
