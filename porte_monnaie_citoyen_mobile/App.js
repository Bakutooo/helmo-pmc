import React from 'react';
import {View, Text} from 'react-native';
import Mission from './views/Mission'

export default class App extends React.Component {
  render(){
    return (
      <View>
        <Mission/>
      </View>
    );
  }
}