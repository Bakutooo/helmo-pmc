import React, { Component } from 'react';
import Geocoder from "react-native-geocoding";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default class MapPresenter extends Component {
    constructor(props){
        super(props);
        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                longitudeDelta: 0,
                latitudeDelta: 0
            }
        }
    }

    componentWillMount(){
        Geocoder.init('AIzaSyDq8hCZEHc0kPCl_1qfGpbP6lCyXy4tDnY');
        Geocoder.from(this.props.address)
                .then(res => {
                    let geo = res.results[0].geometry;
                    this.setState({
                        region: {
                            latitude: Number(geo.location.lat), 
                            longitude: Number(geo.location.lng),
                            longitudeDelta: Number(geo.viewport.northeast.lng) - Number(geo.viewport.southwest.lng),
                            latitudeDelta: Number(geo.viewport.northeast.lat) - Number(geo.viewport.southwest.lat)
                        }
                    });
                    console.log(this.state.region);
                })
                .catch(err => console.log(err));
        
    }

    render() {
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{width: "100%", height: "100%"}}
                initialRegion={this.state.region}
            >
                <Marker coordinate={this.state.region}/>
            </MapView>
        );
    }
}