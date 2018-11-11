import React, { Component } from 'react';

export default class Citizen extends Component {
  render() {
    return (
        <div className="m-1 p-1 bg-white d-flex d-row">
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
        </div>
    );
  }
}
