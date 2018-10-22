import React from 'react';
//import '../style.css';

export default class ConnectionForm extends React.Component {

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
                        this.onSubmit(this.state);
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
