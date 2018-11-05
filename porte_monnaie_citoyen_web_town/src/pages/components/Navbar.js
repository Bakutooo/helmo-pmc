import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="d-flex flex-column pmc-navbar">
                <div><p>Accueil</p></div>                
                <div><p>Évènement</p></div>
                <div><p>Partenaire</p></div>
                <div><p>Citoyen</p></div>
                <div><p>Se déconnecter</p></div>
            </div>
        )
    }
}
