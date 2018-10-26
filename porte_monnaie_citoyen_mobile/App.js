import { View } from "react-native";
import store from "./store";
import { Provider } from 'react-redux';
import React from 'react';
import AppNav from './AppNavigator';

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <AppNav/>
      </Provider>
    )
  }
}