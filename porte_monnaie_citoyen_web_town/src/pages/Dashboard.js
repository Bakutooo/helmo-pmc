import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEventWaiting } from "./../actions/eventAction";
import { fetchPartnerWaiting } from "./../actions/partnerAction";
import Event from './components/Event';
import Partner from './components/PartnerShort';
import socketClient from 'socket.io-client';

class Dashboard extends Component {

    constructor(props){
        super(props);
        if(this.props.town === null) {
            window.location.href = "/";
        }
        this.io = socketClient("https://pmc.girafes.be");
    }

    componentWillMount(){
        this.io.on("newEvent", () => this.props.fetchEventWaiting(this.props.town._id));
        this.io.on("newPartner", () => this.props.fetchPartnerWaiting(this.props.town._id));
        this.props.fetchEventWaiting(this.props.town._id);
        this.props.fetchPartnerWaiting(this.props.town._id);
    }

    renderEvents(){
        return (
            <div className="d-flex flex-row flex-wrap justify-content-between p-2">
                {this.props.eventsWaiting.map((item, index) => (
                    item = <Event data={item} />
                ))}
            </div>
        )
    }

    renderPartners(){
        return (
            <div>
                {this.props.partnersWaiting.map((item, index) => (
                    item = <Partner data={item} />
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className="row w-100">
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
    eventsWaiting: state.event.eventsWaiting,
    partnersWaiting: state.partner.partnersWaiting
});

export default connect(mapStateToProps, { fetchEventWaiting, fetchPartnerWaiting })(Dashboard)