import React from 'react';
import { fetchTown } from '../actions/connectionAction';
import { connect } from 'react-redux';
import '../style.css';

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
        if(this.props.town !== undefined){
            console.log(this.props.town);
            window.location.href += "dashboard";
        }
        return (
            <div className="container w-50">
                <h1 className="text-center">PMC</h1>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        this.props.fetchTown({name : this.state.name, password : this.state.password});
                    }}>
                    {this.props.error !== undefined &&
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
    town : state.connection.town,
    error : state.connection.error
});

export default connect(mapStateToProps, {fetchTown})(ConnectionForm)