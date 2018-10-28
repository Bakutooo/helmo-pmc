import React from 'react';
import ConnectionScreen from './Connection';
import AppNavigator from "./components/AppNavigator";
import { connect } from "react-redux";
import style from "./../style";

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            currentHome: ConnectionScreen
        }
    }

    componentWillReceiveProps(nextProp){
        if(nextProp.citizen === null){
            this.setState({currentHome: ConnectionScreen});
        } else {
            this.setState({currentHome: AppNavigator});
        }
    }

    render(){
        return(
            <this.state.currentHome/>
        );
    }
}

const mapStateToProps = state => ({
    citizen: state.citizen.citizen
})

export default connect(mapStateToProps)(Home)