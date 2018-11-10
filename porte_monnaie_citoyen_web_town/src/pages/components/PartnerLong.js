import React, { Component } from 'react'
import Modal from './modals/ModalPartnerAccepted'

export default class PartnerLong extends Component {
    render() {
        return (
            <div className="pmc-partner w-100 mb-2 p-2 d-flex flex-row bg-white align-item-center" data-toggle="modal" data-target={"#managePartner" + this.props.data.id}>
                <img alt="placeholder" src='https://via.placeholder.com/125x125'/>
                <div className="d-flex flex-column w-100 mx-4">
                    <div className="d-flex flex-row justify-content-between w-100">
                        <div className="d-flex flex-column">
                            <h5>
                                {this.props.data.name}
                            </h5>
                            <p>
                                Rue de la ruche 25, 4685 QuelquePart
                                {this.props.data.address}
                            </p>
                        </div>
                        <a href="#">Voir sa liste d'évènement</a>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare nunc at lacus vestibulum rhoncus. Etiam ut aliquam turpis. Suspendisse at est scelerisque, euismod ex at, ornare lacus. Vestibulum vitae vestibulum quam. In ullamcorper sapien non eros convallis vehicula. Praesent ultricies viverra erat ac vulputate. Donec dictum dapibus sem vel porttitor. Etiam nec nunc eros. Nullam at gravida ligula.
                    </p>
                </div>
                <Modal data={this.props.data}/>
            </div>
        )
    }
}
