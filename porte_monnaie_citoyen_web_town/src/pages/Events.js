import React, { Component } from 'react';
import Event from './components/Event';

export default class Events extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            events : [
                {id : 1, name : 'Fête de la bière', date : '21/12/2012', image : 'placeholder.png', address : "Rue de la bière n°85", description : "Venez boire des bonnes bières"},
                {id : 2, name : 'Fête de la musique', date : '31/10/2018', image : 'placeholder.png'},
                {id : 3, name : 'Retro MIA', date : '31/10/2018', image : 'placeholder.png'},
                {id : 4, name : 'Salon de l\'auto', date : '31/10/2018', image : 'placeholder.png'}
            ]
        };
    }

    renderEvents(){
        return (
            <div className="d-flex flex-row flex-wrap justify-content-between p-2">
                {this.state.events.map((item, index) => (
                    item = <Event data={item} />
                ))}
            </div>
        )
    }
    
    render() {
        return (
            <div className="row w-75">
                <div className="w-75 p-3 event-demande">
                    <h4>Evènements :</h4>
                    {this.renderEvents()}
                </div>
            </div>
        )
    }
}
