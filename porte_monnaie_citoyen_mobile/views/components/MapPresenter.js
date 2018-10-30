import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Geocoder from "react-native-geocoding";

export default class MapPresenter extends Component {
    constructor(props){
        super(props);
        Geocoder.init('AIzaSyDq8hCZEHc0kPCl_1qfGpbP6lCyXy4tDnY');
        Geocoder.from(`${this.props.address}`)
                .then(res => console.log(res));
    }

    render() {
        return (
        <View>
            <Text> Maps lieu: {this.props.address} </Text>
        </View>
        );
    }
}
