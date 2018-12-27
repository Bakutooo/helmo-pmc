import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCitizens } from "./../actions/citizenAction";
import CitizenBlock from "./components/Citizen";

class Citizen extends Component {

    constructor(props) {
        super(props);
        if(this.props.town === null) {
            window.location.href = "/";
        }
    }

    componentWillMount(){
        this.props.fetchCitizens(this.props.town._id);
    }

    render() {
        return (
            <div>
                <header className="d-flex flex-wrap w-100 justify-content-between m-1">
                    <h4>Citoyens :</h4>
                    <span>Trier par : {" "}
                        <select>
                            <option>Nom croissant</option>
                            <option>Nom décroissant</option>
                            <option>Point citoyen croissant</option>
                            <option>Point citoyen décroissant</option>
                        </select>
                    </span>
                </header>
                <div className="d-flex flex-wrap">
                    {this.props.citizens.map(c => (
                        <CitizenBlock className="pmc-citizen" data={c}/>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToStore = state => ({
    citizens: state.citizen.citizens,
    town: state.town.town
});

export default connect(mapStateToStore, { fetchCitizens })(Citizen);