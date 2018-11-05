import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <div className="pmc-bg-primary px-5 d-flex flex-row justify-content-between align-items-center">
                <h1>Tableau de bord</h1>
                <div className="d-flex flex-row">
                    <input
                        className="form-control rounded-0"
                        placeholder="Rechercher..."
                    />
                    <button className="btn rounded-0 pmc-bg-primary border border-white">Rechercher</button>
                </div>
                <div>commune@commune.be</div>
            </div>
        )
    }
}
