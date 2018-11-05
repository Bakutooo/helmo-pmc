import React, { Component } from 'react';

export default class Event extends Component {
    render() {
        return (
        <div className="mr-1 mt-2 bg-white">
            <img alt="placeholder" src={require('../../assets/'+ this.props.data.image)}/>
            <div className="px-2">
                <h4>{this.props.data.title}</h4>
                <p>Date : {this.props.data.date}</p>
            </div>
        </div>
    )
  }
}
