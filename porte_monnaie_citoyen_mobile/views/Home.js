import React from 'react';
import {View, Text, FlatList, Modal, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import style from './../style';

export default class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            menuIsVisible: false,
            data: [
                {key: "1", title: "Titre 1", content: "Content 1"},
                {key: "2", title: "Titre 2", content: "Content 2"},
                {key: "3", title: "Titre 3", content: "Content 3"},
                {key: "4", title: "Titre 4", content: "Content 4"},
            ]
        }

    }

    componentDidMount(){
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
                    data={this.state.data}
                    renderItem={({item}) => 
                    <TouchableOpacity style={style.row} onPress={() => this.props.navigation.navigate('Mission')}>
                        <Text style={style.title_row}>{item.title}</Text>
                        <Text style={style.content_row}>{item.content}</Text>
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