import React, { Component } from 'react'

export default class ModalPartnerAccepted extends Component {
    render() {
        let { _id, name, description, address, phone, mail} = this.props.data;
        return (
            <div>
                <div className="modal fade" id={"managePartner" + _id} tabIndex="-1" role="dialog" aria-labelledby="managePartnerLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="managePartnerLabel">
                                    Informations du partenaire : <br/> {name}
                                </h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <h5>
                                        Description :
                                    </h5>
                                    <p>{description}</p>
                                </div>
                                <hr/>
                                <div>
                                    <p>{address}</p>
                                    <p>{mail}</p>
                                    <p>{phone}</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.props.onCancel()}>Annuler le partenariat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
