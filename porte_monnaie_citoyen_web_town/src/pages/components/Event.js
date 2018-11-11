import React, { Component } from 'react';
import moment from "moment";

export default class Event extends Component {
    render() {
        let { date, name} = this.props.data;
        return (
        <div className="mr-1 mt-2 bg-white">
            <img alt="placeholder" src="https://via.placeholder.com/245x115"/>
            <div className="px-2">
                <h4>{name}</h4>
                <p>Date : {new moment(new Date(date)).format("DD/MM/YYYY")}</p>
            </div>
        </div>
    )
  }
}
