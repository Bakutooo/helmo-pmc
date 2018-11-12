import React from 'react';
import { fetchTown } from "./../../actions/townAction";
import { connect } from 'react-redux';
import '../../style.css';
import { Redirect } from "react-router-dom";

class ConnectionForm extends React.Component {

    constructor(props){
        super(props);
        this.onSubmit = props.onSubmit;
        this.state = {
            name : "",
            password : ""
        };
    }

    render() {
        if(this.props.town !== null){
            return <Redirect to="/dashboard"/>
        }
        return (
            <div className="mx-auto my-5 bg-white p-5 rounded w-50 shadow">
                <h1 className="text-center">Porte Monnaie Citoyen</h1>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        this.props.fetchTown({name : this.state.name, password : this.state.password});
                    }}>
                    {this.props.error !== "" &&
                        <div className="alert alert-danger">{this.props.error}</div>
                    }                    
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={({target: {value}}) => this.setState({name : value})}
                            placeholder="Entrez le nom de la commune..." />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={({target : {value}}) => this.setState({password : value})}
                            placeholder="Entrez votre mot de passe..." />

                    </div>
                    <div className="form-group">
                        <input type="submit"
                            className="btn pmc-bg-primary w-100"
                            value="Se connecter" />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    town : state.town.town,
    error : state.town.error
});

export default connect(mapStateToProps, {fetchTown})(ConnectionForm)