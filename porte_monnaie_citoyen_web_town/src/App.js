import React from 'react';
import Home from './pages/Home';
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
                        <Route exact path="/" component={Home}/>
                        <Route path="/dashboard" component={Dashboard}/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

