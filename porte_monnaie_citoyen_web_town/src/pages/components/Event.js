import React, { Component } from 'react';

export default class Event extends Component {
    render() {
        return (
        <div>
            <img alt="placeholder" src={require('../../assets/placeholder.png')}/>
            <h4>{this.props.data.title}</h4>
            <p>Date : {this.props.data.date}</p>
        </div>
    )
  }
}
