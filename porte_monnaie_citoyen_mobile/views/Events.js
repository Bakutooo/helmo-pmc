import React from 'react';
import {View, Text, FlatList, Modal, TouchableOpacity, ScrollView, Image} from 'react-native';
import Menu from './Menu';
import style from './../style';
import EventsController from './../controllers/EventsController';

export default class Events extends React.Component {
    constructor(props){
        super(props);
        this.controller = new EventsController(this);

        this.state = {
            menuIsVisible: false,
            events: []
        }

    }

    componentDidMount(){
        this.controller.getAllEvents();
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
                        data={this.state.events}
                        renderItem={({item}) => 
                        <TouchableOpacity style={style.row} onPress={() => {this.controller.goToEvent(item)}}>
                            <Image
                                source={{uri: 'https://via.placeholder.com/300x120'}}
                                style={{width: "100%", height:150}}
                            />
                            <Text style={style.title_row}>{item.name}</Text>
                            <Text style={style.content_row}>{item.date}</Text>
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