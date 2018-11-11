import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <div className="pmc-bg-primary px-2 d-flex flex-row justify-content-between align-items-center pmc-header">
                <h1>Tableau de bord</h1>
                <div className="d-flex flex-row w-25">
                    <input
                        className="form-control rounded-0 pmc-search"
                        placeholder="Rechercher..."
                    />
                    <button className="btn rounded-0 pmc-bg-primary border border-white">Rechercher</button>
                </div>
                <div>commune@commune.be</div>
            </div>
        )
    }
}
