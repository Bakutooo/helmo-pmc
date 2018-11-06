import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/connectionAction';
import Event from './components/Event'
import Partner from './components/Partner'

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            events : [
                {id : 1, name : 'Fête de la bière', date : '21/12/2012', image : 'placeholder.png', address : "Rue de la bière n°85", description : "Venez boire des bonnes bières"},
                {id : 2, name : 'Fête de la musique', date : '31/10/2018', image : 'placeholder.png'},
                {id : 3, name : 'Retro MIA', date : '31/10/2018', image : 'placeholder.png'},
                {id : 4, name : 'Salon de l\'auto', date : '31/10/2018', image : 'placeholder.png'}
            ],
            partners : [
                {name : "La ruche qui dit oui"},
                {name : "Jupiler"},
                {name : "Radio contact"},
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

    renderPartners(){
        return (
            <div>
                {this.state.partners.map((item, index) => (
                    item = <Partner data={item} />
                ))}
            </div>
        )
    }

    render() {
        
        return (
            <div className="row w-75">
                <div className="w-75 p-3 event-demande">
                    <h4>Dernières demandes d'évènement :</h4>
                    {this.renderEvents()}
                </div>

                <div className="w-25 p-3">
                    <h4>Dernières demandes de partenariat :</h4>
                    {this.renderPartners()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    town : state.connection.town
});

export default connect(mapStateToProps, {fetchEvents})(Dashboard)