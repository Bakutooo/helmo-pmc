import React, { Component } from 'react';
import style from './../../style';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class EventPresenter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { event } = this.props;
    return (
      <View>
        <Image
            source={{uri: 'https://via.placeholder.com/300x120'}}
            style={{width : "100%", height : 150, margin : 5, alignSelf : 'center'}}
        />

        <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center", margin: 15}}>
            {event.name}
        </Text>
        <Text style={{fontSize: 17, marginBottom: 10}}>
            {event.description}
        </Text>
        
    
        <Text style={style.line}/>
        <Text style={{fontSize: 20, marginBottom: 10}}>Récompense : {event.gain} PC</Text>
        <Text style={{fontSize: 20}}>Lieu : {event.address}</Text>
        <TouchableOpacity>
            <Text style={style.button_link}>Voir sur la carte</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EventPresenter;
