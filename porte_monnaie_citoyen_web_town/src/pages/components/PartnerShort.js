import React, { Component } from 'react'
import PartnerValidation from './modals/ModalPartnerValidation'

export default class Partner extends Component {
    render() {
        return (
            <div className="w-75 mb-2 p-2 bg-white justify-content-center align-item-center">
                <div><b>{this.props.data.name}</b></div>
                <a href="#" data-toggle="modal" data-target={"#manageEvent" + this.props.data.id}>Voir détails</a>
                <PartnerValidation data={this.props.data}/>
            </div>
        )
    }
}
