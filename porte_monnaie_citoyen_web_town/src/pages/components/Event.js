import React, { Component } from 'react';
import Modal from './ModalEventValidation';

export default class Event extends Component {

    render() {
        return (
            <div>
                <div className="pmc-event mr-1 mt-2 bg-white" data-toggle="modal" data-target={"#manageEvent" + this.props.data.id}>
                    <img alt="placeholder" src={require('../../assets/'+ this.props.data.image)}/>
                    <div className="px-2">
                        <h4>{this.props.data.name}</h4>
                        <p>Date : {this.props.data.date}</p>
                    </div>
                </div>
                <Modal data={this.props.data}/>
            </div>
        )
    }
}
