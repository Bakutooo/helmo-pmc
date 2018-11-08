import React, { Component } from 'react'

export default class ModalEventValidation extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            feedbackHidden : true,
            feedbackValue : "",
            gainValue : 0
        }
    }

    changeFeedbackReportVisibility(){
        this.setState({feedbackHidden : !this.state.feedbackHidden});
        if(!this.state.feedbackHidden){
            this.setState({feedbackValue : ""});
        }
        else{
            this.setState({gainValue : 0});
        }
    }
    
    render() {
        return (
            <div>
                <div className="modal fade" id={"manageEvent" + this.props.data.id} tabIndex="-1" role="dialog" aria-labelledby="manageEventLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="manageEventLabel">
                                    Validation de l'évènement : <br/>{this.props.data.name}
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
                                <div>
                                    <p>{this.props.data.address}</p>
                                    <p>{this.props.data.date}</p>
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
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
