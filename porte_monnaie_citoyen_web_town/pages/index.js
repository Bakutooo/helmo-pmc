import React from 'react';
import ConnectionForm from '../forms/ConnectionForm';
import {Provider, connect} from 'react-redux';
import store from '../store';

export default class App extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <ConnectionForm
                        onSubmit={(login) => this.props.connection(login)}/>
                </div>
            </Provider>
        )
    }
}

