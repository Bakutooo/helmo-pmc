import React, { Component } from 'react';
import moment from "moment";
import ModalValidation from './modals/ModalEventValidation';
import ModalAccepted from './modals/ModalEventAccepted';

export default class Event extends Component {

    render() {
        let { date, name} = this.props.data;
        let modal = null;
        if(this.props.data.state === "A"){
            modal = <ModalAccepted data={this.props.data}/>;
        }
        else if(this.props.data.state === "W"){
            modal = <ModalValidation data={this.props.data}/>
        }
        return (
            <div>
                <div className="pmc-event mr-1 mt-2 bg-white" data-toggle="modal" data-target={"#manageEvent" + this.props.data.id}>
                    <img alt="placeholder" src={require('../../assets/'+ this.props.data.image)}/>
                    <div className="px-2">
                        <h4>{this.props.data.name}</h4>
                        <p>Date : {this.props.data.date}</p>
                    </div>
                </div>
                {modal}
            </div>
        )
    }
}
