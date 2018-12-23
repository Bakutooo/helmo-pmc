import React, { Component } from 'react'
import PartnerValidation from './modals/ModalPartnerValidation'
import { connect } from "react-redux";
import { refusePartner, acceptPartner } from "./../../actions/partnerAction";

class PartnerShort extends Component {
    render() {
        return (
            <div className="shadow w-75 mb-2 p-2 bg-white justify-content-center align-item-center">
                <div><b>{this.props.data.name}</b></div>
                <a href="#detail" data-toggle="modal" data-target={"#manageEvent" + this.props.data._id}>Voir détails</a>
                <PartnerValidation data={this.props.data} onAccept={() => this.props.acceptPartner(this.props.data)} onRefuse={(feedback) => this.props.refusePartner(this.props.data, feedback)}/>
            </div>
        )
    }
}

export default connect(null, { refusePartner, acceptPartner })(PartnerShort);