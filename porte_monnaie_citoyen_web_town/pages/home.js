import React from 'react'
import Connection from '../forms/ConnectionForm'
import {connect} from 'react-redux'

class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            currentHome : Connection
        }
    }

    componentWillReceiveProps(nextProp){
        if(nextProp.town === null){
            this.setState({currentHome: Connextion});
        }
    }

    render(){
        return(
            <this.state.currentHome/>
        );
    }
}

const mapStateToProps = state => ({
    //town : state.town.town
});

export default connect(mapStateToProps)(Home);