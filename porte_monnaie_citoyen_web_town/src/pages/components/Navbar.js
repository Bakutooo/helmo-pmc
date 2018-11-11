import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="d-flex flex-column pmc-navbar">
                <Link to="/dashboard"><div>Accueil</div></Link>                
<<<<<<< HEAD
                <Link to="/dashboard"><div>Évènement</div></Link>
                <Link to="/dashboard"><div>Partenaire</div></Link>
=======
                <Link to="/event"><div>Évènement</div></Link>
                <Link to="/partner"><div>Partenaire</div></Link>
>>>>>>> origin/manage_partner
                <Link to="/citizen"><div>Citoyen</div></Link>
                <Link to="/dashboard"><div>Se déconnecter</div></Link>
            </div>
        )
    }
}
