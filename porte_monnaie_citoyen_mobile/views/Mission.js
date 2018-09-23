import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class Mission extends React.Component {

    constructor(params){
        super();

        this.state = {
            title : "Feuille morte",
            description : "",
            adress : "",
            lattitude : "",
            longitude : "", 
            reward : 0.0,
            prority : 0, 
            status : "",
            date_start : new Date(),
            date_end : new Date()          
        }
    }

    render(){
        return (
            <View style={styles.view}>

                <Image
                source={require('./../image/megumin.jpg')}
                style={{width : 230, height : 80, marginTop : 40, alignSelf : 'center'}}
                />

                <Text style={styles.title}>
                    {this.state.title}
                </Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Donec ut egestas sem, id finibus odio. Ut tempor justo id lorem laoreet,
                      non venenatis erat vulputate. Proin finibus dui id nulla venenatis,
                       eget lacinia est egestas. Nullam congue consectetur mauris vel maximu. 
                </Text>
                
               
                <Text style={styles.line}/>
                <Text style={styles.text2}>Rue de la régence, 23 Liège</Text>
                <Text style={styles.text2}>10 points en récompense !</Text>

                <TouchableOpacity> 
                    <Text style={styles.button}>Effectuer</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.button}>Google map</Text>
                </TouchableOpacity>
            </View>
        );
    }    
}

const styles = StyleSheet.create({
    title: {
        marginTop : 20,
        marginBottom: 10,
        fontSize : 17,
        fontWeight: 'bold',
        textAlign : 'center'
        
    },
    view :{
        padding : 20,
        backgroundColor: '#E4EDFF'
    },
    description : {
        marginTop : 10,
        marginBottom: 15,
        fontSize : 15,
        
    },
    text2: {
        marginBottom: 20,
        fontSize : 20,
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 10,
    },
    center : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button : {
        backgroundColor: "#0084b4", 
        alignItems:"center",
        color: "#FFFFFF", 
        fontSize: 25, 
        padding: 20,
        margin: 5
    },
  });
