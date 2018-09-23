import React from 'react';
import {View, Text, FlatList, Modal, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import style from './../style';
import MissionsController from './../controllers/MissionsController';

export default class Missions extends React.Component {
    constructor(params){
        super();
        this.controller = new MissionsController(this);
        this.navigation = params.navigation;

        this.state = {
            menuIsVisible: false,
            missions: []
        }

    }

    componentDidMount(){
        this.controller.getAllMissions();
    }

    render(){
        return (
            <View>
                <View style={style.header}> 
                    <TouchableOpacity onPress={() => this.setState({menuIsVisible: true})}>
                        <Text style={{fontSize: 40, marginLeft:15}}>&equiv;</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 30, marginLeft: 20}}>Missions</Text>
                </View>
                <FlatList
                    data={this.state.missions}
                    renderItem={({item}) => 
                    <TouchableOpacity style={style.row} onPress={() => {this.controller.goToMission(item)}}>
                        <Text style={style.title_row}>{item.title}</Text>
                        <Text style={style.content_row}>{item.description}</Text>
                    </TouchableOpacity>}
                />

                <Modal
                    transparent={true}
                    visible={this.state.menuIsVisible}
                    onRequestClose={() => this.setState({menuIsVisible: false})}
                >
                    <Menu 
                        navigation={this.props.navigation} 
                        onPress={() => this.setState({menuIsVisible: false})}
                    />
                </Modal>
            </View>
        );
    }
}