import React from 'react';
import Header from './pages/components/Header';
import Navbar from './pages/components/Navbar';
import Home from './pages/Home';
import Citizen from "./pages/Citizen";
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Partners from './pages/Partners'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <div>
                            <Header/>
                        </div>
                        <div className="d-flex flex-row">
                            <Navbar/>
                            <Route exact path="/" component={Home}/>
                            <Route path="/dashboard" component={Dashboard}/>
                            <Route path="/citizen" component={Citizen}/>
                            <Route path="/event" component={Events}/>
                            <Route path="/partner" component={Partners}/>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

