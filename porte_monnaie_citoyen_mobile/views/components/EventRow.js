import React, { Component } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import style from './../../style';

export default class EventRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableOpacity
            style={style.row} 
            onPress={() => this.props.onClick()}>
            
            <Image
                source={{uri: 'https://via.placeholder.com/300x120'}}
                style={{width: "100%", height:150}}/>
            <Text style={style.title_row}>{this.props.event.name}</Text>
            <Text style={style.content_row}>{new Date(this.props.event.date).toLocaleDateString()}</Text>
        </TouchableOpacity>
    );
  }
}
