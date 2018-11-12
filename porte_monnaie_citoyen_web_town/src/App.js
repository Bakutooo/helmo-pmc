import React from 'react';
import Navbar from './pages/components/Navbar';
import Home from './pages/Home';
import Citizen from "./pages/Citizen";
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Partners from './pages/Partners'
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends React.Component{
    componentWillMount(){
    }
    
    render() {
        return (
            <BrowserRouter>
                <div className="h-100">
                    <div>
                        <Navbar/>
                    </div>
                    <div className="d-flex flex-row h-100 w-100 pmc-container">
                        <Route exact path="/" component={Home}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/citizen" component={Citizen}/>
                        <Route path="/event" component={Events}/>
                        <Route path="/partner" component={Partners}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({
    town: state.town.town
});

export default connect(mapStateToProps, {})(App);

