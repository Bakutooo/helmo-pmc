import React from 'react';
import Header from './pages/components/Header';
import Home from './pages/Home';
import Citizen from "./pages/Citizen";
import Dashboard from './pages/Dashboard';
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
                        <Route exact path="/" component={Home}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/citizen" component={Citizen}/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

