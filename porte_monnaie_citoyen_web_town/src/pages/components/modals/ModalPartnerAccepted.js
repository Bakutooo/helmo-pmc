import React, { Component } from 'react'

export default class ModalPartnerAccepted extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id={"managePartner" + this.props.data.id} tabIndex="-1" role="dialog" aria-labelledby="managePartnerLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="managePartnerLabel">
                                    Informations du partenaire : <br/> {this.props.data.name}
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
                                    <p>{this.props.data.description}</p>
                                </div>
                                <hr/>
                                <div>
                                    <p>{this.props.data.address}</p>
                                    <p>{this.props.data.mail}</p>
                                    <p>{this.props.data.phone}</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                <button type="button" className="btn btn-danger">Annuler le partenariat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
