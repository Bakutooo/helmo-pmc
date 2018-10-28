import React from 'react';
import { fetchTown } from '../actions/connectionAction';
import { connect } from 'react-redux';
//import '../style.css';

class ConnectionForm extends React.Component {

    constructor(props){
        super(props);
        this.onSubmit = props.onSubmit;
        this.state = {
            mail : "",
            password : ""
        };
    }

    render() {
        return (
            <div style={{
                    flex: 1,
                }}>
                <h1>PMC</h1>
                <form
                    style={{
                        flexDirection: "column"
                    }}
                    onSubmit={(event) => {
                        event.preventDefault();
                        this.props.fetchTown({mail : this.state.mail, password : this.state.password})
                        this.setState({mail : "", password : ""});
                }}>
                    <input type="text"
                        onChange={({target: {value}}) => this.setState({mail : value})}
                        placeholder="Entrez votre email..." />
                    <input type="password"
                        onChange={({target : {value}}) => this.setState({password : value})}
                        placeholder="Entrez votre mot de passe..." />
                    <input type="submit"
                        value="Se connecter" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    //town : state.town.town,
    //errorMessage : state.town.error
});

export default connect(mapStateToProps, {fetchTown})(ConnectionForm)