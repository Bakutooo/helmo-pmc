import React, { Component } from 'react'
import moment from "moment";

export default class ModalEventValidation extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            feedbackHidden : true,
            feedbackValue : "",
            gainValue : 0,
            onSubmit: () => this.props.onAccept()
        }
    }

    changeFeedbackReportVisibility(){
        this.setState({feedbackHidden : !this.state.feedbackHidden});
        if(!this.state.feedbackHidden){
            this.setState({onSubmit: () => this.props.onAccept()});
            this.setState({feedbackValue : ""});
        }
        else{
            this.setState({onSubmit: () => this.props.onRefuse()});
            this.setState({gainValue : 0});
        }
    }
    
    render() {
        let { _id, name, description, address, date} = this.props.data;
        return (
            <div>
                <div className="modal fade" id={"manageEvent" + _id} tabIndex="-1" role="dialog" aria-labelledby="manageEventLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="manageEventLabel">
                                    Validation de l'évènement : <br/>{name}
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
                                <div>
                                    <p>{address}</p>
                                    <p>{new moment(new Date(date)).format("DD/MM/YYYY")}</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <select className="w-25 mb-2" onChange={() => this.changeFeedbackReportVisibility()}>
                                        <option>Accepter</option>
                                        <option>Refuser</option>
                                    </select>
                                    <div className="mt-3" hidden={this.state.feedbackHidden}>
                                        <h6>Veuillez expliquer les raisons du refus</h6>
                                        <textarea id="feedbackTextarea"
                                            className="form-control"
                                            value={this.state.feedbackValue}
                                            onChange={({target: {value}}) => this.setState({feedbackValue : value})}/>
                                    </div>
                                    <div className="mt-3" hidden={!this.state.feedbackHidden}>
                                        <h6>Encoder le nombres de points à attribuer pour cet évènement</h6>
                                        <input type="number"
                                            value={this.state.gainValue}
                                            onChange={({target: {value}}) => this.setState({gainValue : value})}
                                            min="0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.state.onSubmit()} data-dismiss="modal">Envoyer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
