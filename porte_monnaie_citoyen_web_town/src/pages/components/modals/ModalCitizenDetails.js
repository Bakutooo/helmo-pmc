import React, { Component } from 'react'
import moment from 'moment'

export default class ModalCitizenDetails extends Component {
    render() {
        let {_id, lastname, firstname, birthday, numNat, address, mail, phone, points} = this.props.data;
        return (
            <div>
                <div className="modal fade" id={"manageCitizen" + _id} tabIndex="-1" role="dialog" aria-labelledby="manageCitizenLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Détails du citoyen : {firstname + " " + lastname}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Adresse : {address}</p>
                                <p>Date de naissance : {new moment(new Date(birthday)).format("DD/MM/YYYY")}</p>
                                <p>Numéro national : {numNat}</p>
                                <p>Email : {mail}</p>
                                <p>Numéro de téléphone : {phone}</p>
                                <p>Points citoyen : {points}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.props.onDelete()}>Supprimer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
