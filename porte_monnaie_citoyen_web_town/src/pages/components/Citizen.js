import React, { Component } from 'react';
import Modal from './modals/ModalCitizenDetails'
import { connect } from 'react-redux'
import {deleteCitizen} from './../../actions/citizenAction'

class Citizen extends Component {
  render() {
    return (
        <div className="m-1 p-1 bg-white d-flex d-row" data-toggle="modal" data-target={"#manageCitizen" + this.props.data._id}>
            <img alt="placeholder" src='https://via.placeholder.com/125x125'/>
            <div className="px-2">
                <span className="d-flex justify-content-between">
                    <span className="h4">{this.props.data.firstname} {this.props.data.lastname}</span>
                    <i className="h6 ml-2">{this.props.data.numNat}</i>
                </span>
                <p>{this.props.data.address}<br/>{this.props.data.town.name}</p>
                <div className="d-flex justify-content-between">
                    <p>Point citoyen: {this.props.data.points}</p>
                </div>
            </div>
            <Modal data={this.props.data} onDelete={() => this.props.deleteCitizen(this.props.data._id)}/>
        </div>
    );
  }
}

export default connect(null, {deleteCitizen})(Citizen);