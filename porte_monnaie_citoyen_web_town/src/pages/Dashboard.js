import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/connectionAction';
import Event from './components/Event'

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            events : [
                {title : 'Fête de la bière', date : '21/12/2012'},
                {title : 'Fête de la musique', date : '31/10/2018'}
            ]
        };
    }

    renderEvents(){
        return (
            <div>
                {this.state.events.map((item, index) => (
                    item = <Event data={item} />
                ))}
            </div>
        )
    }

    render() {
        
        return (
            <div className="container row">
                <div>
                    <h4>Dernières demandes d'évènement :</h4>
                    {this.renderEvents()}
                </div>

                <div className="partner-demande">
                    <h4>Dernières demandes de partenariat :</h4>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    town : state.connection.town
});

export default connect(mapStateToProps, {fetchEvents})(Dashboard)