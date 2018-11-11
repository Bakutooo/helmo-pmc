import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top pmc-bg-primary">
                <Link to={"/dashboard"}><div class="navbar-brand">Tableau de bord</div></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav mr-auto">
                        <Link to="/dashboard"><div className="nav-link">Accueil</div></Link>                
                        <Link to="/partner"><div className="nav-link">Partenaire</div></Link>
                        <Link to="/event"><div className="nav-link">Évènement</div></Link>
                        <Link to="/citizen"><div className="nav-link">Citoyen</div></Link>
                    </div>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control rounded-0 pmc-search" type="search" placeholder="Rechercher..." aria-label="Search"/>
                    <button class="btn rounded-0 pmc-bg-primary border border-white" type="submit">Rechercher</button>
                    </form>
                    <div className="navbar-nav">
                        <Link to="/dashboard"><div className="nav-link">Se déconnecter</div></Link>
                    </div>
                </div>
            </nav>
        )
    }
}
