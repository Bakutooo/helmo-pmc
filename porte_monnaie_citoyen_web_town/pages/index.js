import React from 'react';
import Home from './home';
import {Provider} from 'react-redux';
import store from '../store';

export default class App extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        )
    }
}

