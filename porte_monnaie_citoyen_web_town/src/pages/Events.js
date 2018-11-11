import React, { Component } from 'react';
import Event from './components/Event';
import { connect } from "react-redux";
import { fetchEventAccepted, fetchEventWaiting } from "./../actions/eventAction";

class Events extends Component {
    componentWillMount(){
        this.props.fetchEventAccepted(this.props.town._id);
        this.props.fetchEventWaiting(this.props.town._id);
    }

    renderEvents(events){
        return (
            <div className="d-flex flex-wrap">
                {events.map((item, index) => (
                    item = <Event data={item} />
                ))}
            </div>
        )
    }
    
    render() {
        return (
            <div className="row w-100">
                <div className="w-75 p-3 event-demande">
                    <h4>Evènements :</h4>
                    {this.renderEvents(this.props.eventsAccepted)}
                </div>
                <div className="w-25 p-3">
                    <h4>Demandes d'évènement :</h4>
                    {this.renderEvents(this.props.eventsWaiting)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    eventsAccepted: state.event.eventsAccepted,
    town: state.town.town,
    eventsWaiting: state.event.eventsWaiting
})

export default connect(mapStateToProps, { fetchEventAccepted, fetchEventWaiting })(Events);