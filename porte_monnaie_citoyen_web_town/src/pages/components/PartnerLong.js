import React, { Component } from 'react'
import Modal from './modals/ModalPartnerAccepted'
import { connect } from "react-redux";
import { deletePartner } from "./../../actions/partnerAction";

class PartnerLong extends Component {
    render() {
        let {_id, name, address, town} = this.props.data;
        return (
            <div className="pmc-partner w-100 mb-2 p-2 d-flex flex-row bg-white" data-toggle="modal" data-target={"#managePartner" + _id}>
                <img className="pmc-logo-partner" alt="placeholder" src='https://via.placeholder.com/125x125'/>
                <div className="mx-4">
                    <div className="d-flex flex-row justify-content-between w-100">
                        <div>
                            <span className="h4"> {name} </span><a href="#">Voir sa liste d'évènement</a>
                            <p><i>{address + " " + town.name}</i><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare nunc at lacus vestibulum rhoncus. Etiam ut aliquam turpis. Suspendisse at est scelerisque, euismod ex at, ornare lacus. Vestibulum vitae vestibulum quam. In ullamcorper sapien non eros convallis vehicula.</p>
                        </div>
                    </div>
                </div>
                <Modal data={this.props.data} onCancel={() => this.props.deletePartner(this.props.data._id)}/>
            </div>
        )
    }
}

export default connect(null, { deletePartner })(PartnerLong);
