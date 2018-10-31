import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from './actions/connectionAction';

class Dashboard extends Component {

    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <div className="container row">
                <button onClick={this.props.fetchEvents()}>test</button>
                <div>
                    <h4>Dernières demandes d'évènement :</h4>
                    <div>

                    </div>
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