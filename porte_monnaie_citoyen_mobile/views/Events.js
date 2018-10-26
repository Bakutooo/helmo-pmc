import React from 'react';
import {View, Text, FlatList, Modal, TouchableOpacity, ScrollView, Image} from 'react-native';
import Menu from './Menu';
import style from './../style';

import { connect } from "react-redux";
import { fetchAllEvents } from "./../actions/eventAction";

class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuIsVisible: false,
        }

        this.props.fetchAllEvents();
    }

    render(){
        let { navigation } = this.props;
        return (
            <ScrollView>
                <View>
                    <View style={style.header}> 
                        <TouchableOpacity onPress={() => this.setState({menuIsVisible: true})}>
                            <Text style={{fontSize: 40, marginLeft:15, color : 'white'}}>&equiv;</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 30, marginLeft: 20, color : 'white'}}>Évènements</Text>
                    </View>
                    <FlatList
                        data={this.props.events}
                        renderItem={({item}) => 
                        <TouchableOpacity 
                            key={item._id} 
                            style={style.row} 
                            onPress={() => this.props.navigation.navigate('Event', {event: item._id})}
                        >
                            <Image
                                source={{uri: 'https://via.placeholder.com/300x120'}}
                                style={{width: "100%", height:150}}
                            />
                            <Text style={style.title_row}>{item.name}</Text>
                            <Text style={style.content_row}>{new Date(item.date).toLocaleDateString()}</Text>
                        </TouchableOpacity>}
                    />

                    <Modal
                        transparent={true}
                        visible={this.state.menuIsVisible}
                        onRequestClose={() => this.setState({menuIsVisible: false})}
                    >
                        <Menu 
                            navigation={navigation} 
                            onPress={() => this.setState({menuIsVisible: false})}
                        />
                    </Modal>
                </View>
            </ScrollView>

        );
    }
}

const mapStateToProps = state => ({
    events: state.event.events,
})

export default connect(mapStateToProps, { fetchAllEvents })(Events);