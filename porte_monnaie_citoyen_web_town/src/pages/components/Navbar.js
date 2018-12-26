import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { deconnection } from './../../actions/townAction';
import { connect } from "react-redux";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top pmc-bg-primary">
                <Link to={"/dashboard"}><div className="navbar-brand">Tableau de bord</div></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto">
                        <Link to="/dashboard"><div className="nav-link">Accueil</div></Link>                
                        <Link to="/partner"><div className="nav-link">Partenaire</div></Link>
                        <Link to="/event"><div className="nav-link">Évènement</div></Link>
                        <Link to="/citizen"><div className="nav-link">Citoyen</div></Link>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control rounded-0 pmc-search" type="search" placeholder="Rechercher..." aria-label="Search"/>
                    <button className="btn rounded-0 pmc-bg-primary border border-white" type="submit">Rechercher</button>
                    </form>
                    <div className="navbar-nav">
                        <a href="/"><div className="nav-link">Se déconnecter</div></a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect(null, { deconnection })(Navbar);