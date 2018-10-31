import store from "./store";
import { Provider } from 'react-redux';
import React from 'react';
import Home from './views/Home';

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}