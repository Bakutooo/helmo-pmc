import React, { Component } from 'react'
import moment from "moment";

export default class ModalEventAccepted extends Component {
    render() {
        let { _id, name, description, date, address} = this.props.data;
        return (
            <div>
                <div className="modal fade" id={"manageEvent" + _id} tabIndex="-1" role="dialog" aria-labelledby="manageEventLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="manageEventLabel">
                                    Informations de l'évènement : <br/> {name}
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
                                    <p>{new moment(new Date(date)).format("DD/MM/YYYY")}</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.props.onCancel()}>Annuler l'évènement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
