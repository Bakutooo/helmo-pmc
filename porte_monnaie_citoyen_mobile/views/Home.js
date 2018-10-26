import React from 'react';
import ConnectionScreen from './Connection';
import EventsScreen from './Events';
import { connect } from "react-redux";

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
            this.setState({currentHome: EventsScreen});
        }
    }

    render(){
        return(
            <this.state.currentHome navigation={this.props.navigation}/>
        );
    }
}

const mapStateToProps = state => ({
    citizen: state.citizen.citizen
})

export default connect(mapStateToProps)(Home)