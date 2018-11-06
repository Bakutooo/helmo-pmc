import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCitizens } from "./../actions/citizenAction";
import CitizenBlock from "./components/Citizen";

class Citizen extends Component {

    constructor(props){
        super(props);
        this.state = {
            citizens: [
                {firstname: "Bastien", lastname: "Pierre", image: "placeholder.png", numNat: "971219-501.80", address: "Rue du Rêwe 9/1", town: {name: "Liège"}, points: 25}
            ]
        }
    }

    render() {
        return (
            <div>
                <header className="d-flex justify-content-between m-1">
                    <h2>Citoyens :</h2>
                    <span>Trier par : {" "}
                        <select>
                            <option>Nom croissant</option>
                            <option>Nom décroissant</option>
                            <option>Point citoyen croissant</option>
                            <option>Point citoyen décroissant</option>
                        </select>
                    </span>
                </header>
                <div>
                    {this.state.citizens.map(c => (
                        <CitizenBlock data={c}/>
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