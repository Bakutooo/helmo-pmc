import React, { Component } from 'react'

export default class ModalEventValidation extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            feedbackHidden : true,
            feedbackValue : "",
            password : "",
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
            this.setState({onSubmit: () => this.props.onRefuse(this.state.feedbackValue)});
            this.setState({password : ""});
        }
    }
    
    render() {
        let { _id, name, description, address, phone, mail} = this.props.data;
        return (
            <div>
                <div className="modal fade" id={"manageEvent" + _id} tabIndex="-1" role="dialog" aria-labelledby="manageEventLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="manageEventLabel">
                                    Validation du partenaire : <br/>{name}
                                </h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <h5>
                                        Information :
                                    </h5>
                                    <p>{mail}</p>
                                    <p>{phone}</p>
                                </div>
                                <hr />
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
                                        <h6>Encoder le mot de passe à attribuer à ce partenaire</h6>
                                        <input type="password"
                                            value={this.state.password}
                                            onChange={({target: {value}}) => this.setState({password : value})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.state.onSubmit()}>Envoyer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
