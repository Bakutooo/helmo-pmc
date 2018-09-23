import React from 'react';
import {View, Text, FlatList, Modal, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import style from './../style';
import HomeController from './../controllers/HomeController';

export default class Home extends React.Component {
    constructor(){
        super();
        this.controller = new HomeController(this);

        this.state = {
            menuIsVisible: false,
            missions: []
        }

    }

    componentDidMount(){
        this.controller.getAllMissions();
        this.props.navigation.setParams({showMenu: this.showMenu});
    }

    showMenu = () => {
        this.setState({menuIsVisible: true});
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerLeft: (
                <TouchableOpacity onPress={navigation.getParam('showMenu')}>
                    <Text style={{marginLeft: 15, color: 'black', fontSize:50}}>&equiv;</Text>
                </TouchableOpacity>
            )
        }
    }
    
    render(){
        return (
            <View>
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