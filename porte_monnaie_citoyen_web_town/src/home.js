import React from 'react'
import Connection from './forms/ConnectionForm'
import {connect} from 'react-redux'

class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Connection/>
        );
    }
}

const mapStateToProps = state => ({
    town : state.connection.town
});

export default connect(mapStateToProps)(Home);