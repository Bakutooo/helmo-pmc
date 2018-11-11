import React, { Component } from 'react';
import moment from "moment";
import ModalValidation from './modals/ModalEventValidation';
import ModalAccepted from './modals/ModalEventAccepted';
import { connect } from "react-redux";
import { acceptEvent, refuseEvent, deleteEvent } from "./../../actions/eventAction";

class Event extends Component {

    render() {
        let { data, acceptEvent, refuseEvent, deleteEvent } = this.props;
        let { date, name, state, _id} = data;
        let modal = null;
        if(state === "A"){
            modal = <ModalAccepted data={data} onCancel={() => deleteEvent(data._id)}/>;
        }
        else if(state === "W"){
            modal = <ModalValidation data={data} onAccept={() => acceptEvent(data)} onRefuse={() => refuseEvent(data)}/>
        }
        return (
            <div>
                <div className="pmc-event mr-1 mt-2 bg-white" data-toggle="modal" data-target={"#manageEvent" + _id}>
                    <img alt="placeholder" src={require('../../assets/placeholder.png')}/>
                    <div className="px-2">
                        <h4>{name}</h4>
                        <p>Date : {new moment(new Date(date)).format("DD/MM/YYYY")}</p>
                    </div>
                </div>
                {modal}
            </div>
        )
    }
}

export default connect(null, { acceptEvent, refuseEvent, deleteEvent })(Event);