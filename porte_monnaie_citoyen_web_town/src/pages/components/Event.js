import React, { Component } from 'react';

export default class Event extends Component {

    render() {
        return (
            <div>
                <div className="mr-1 mt-2 bg-white" data-toggle="modal" data-target={"#manageEvent" + this.props.data.id} >
                    <img alt="placeholder" src={require('../../assets/'+ this.props.data.image)}/>
                    <div className="px-2">
                        <h4>{this.props.data.name}</h4>
                        <p>Date : {this.props.data.date}</p>
                    </div>
                </div>
  

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
