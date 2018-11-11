import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEventWaiting } from "./../actions/eventAction";
import { fetchPartnerWaiting } from "./../actions/partnerAction";
import Event from './components/Event'
import Partner from './components/PartnerShort'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            partners : [
                {name : "La ruche qui dit oui", mail : "laruche@quidit.oui", phone : "+3256894520"},
                {name : "Jupiler"},
                {name : "Radio contact"},
            ]
        };
    }

    componentWillMount(){
        this.props.fetchEventWaiting(this.props.town._id);
        this.props.fetchPartnerWaiting(this.props.town._id);
    }

    renderEvents(){
        return (
            <div className="d-flex flex-row flex-wrap justify-content-between p-2">
                {this.props.eventWaiting.map((item, index) => (
                    item = <Event data={item} />
                ))}
            </div>
        )
    }

    renderPartners(){
        return (
            <div>
                {this.props.partnerWaiting.map((item, index) => (
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
    town : state.town.town,
    eventWaiting: state.event.eventWaiting,
    partnerWaiting: state.partner.partnerWaiting
});

export default connect(mapStateToProps, { fetchEventWaiting, fetchPartnerWaiting })(Dashboard)