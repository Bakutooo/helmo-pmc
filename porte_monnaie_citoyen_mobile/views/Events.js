import React from 'react';
import {View, FlatList, Modal, ScrollView, TouchableOpacity, Text} from 'react-native';
import Menu from './components/Menu';
import EventRow from "./components/EventRow";

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

    componentWillMount(){
        this.props.navigation.setOptions({
            headerTitle: "Évenements",
            headerLeft: (
                <TouchableOpacity onPress={() => this.showMenu()}>
                    <Text style={{fontSize: 40, marginLeft:15, color : 'white'}}>&equiv;</Text>
                </TouchableOpacity>)
        });
    }

    showMenu(){
        this.setState({menuIsVisible: true});
    }

    render(){
        let { navigation } = this.props;
        return (
            <ScrollView>
                <View>
                    <FlatList
                        data={this.props.events}
                        renderItem={({item}) => (
                            <EventRow
                                event={item} 
                                onClick={() => this.props.navigation.navigate('Event', {event: item._id})}/>
                        )}
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