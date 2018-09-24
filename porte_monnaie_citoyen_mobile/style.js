let primaryColor = "#F3F7F7";
let secondaryColor = "#BBBBBB";
let buttonColor = "#0084b4";

export default {
    button_menu: {
        fontSize: 30,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    menu: {
        width: "70%",
        height: "100%",
        backgroundColor: 'white'
    },
    row: {
        margin: 5,
        padding: 5,
        backgroundColor: secondaryColor
    },
    title_row: {
        margin: 10,
        fontSize: 30
    },
    content_row: {
        fontSize: 20
    },
    profile: {
        height: "100%",
        padding : 20
    },
    button_search: {
        position: "absolute",
        bottom: 5,
        right: 5,
        width: 20,
        height: 20,
        backgroundColor: secondaryColor
    },
    input: {
        height: 40,
        marginBottom: 5,
        padding: 5,
        fontSize: 15, 
        width: "100%",
        bordeStyle: 'solid',
        borderWidth : 1,
        borderColor: 'black'  
    },
    form_inscription: {
        height: "100%",
        padding: 15,
        backgroundColor: primaryColor
    },
    form_connection: {
        justifyContent: "center",
        //height: "100%",
        padding: 15,
        //backgroundColor: primaryColor
    },
    button: {
        /*backgroundColor: buttonColor, 
        alignItems:"center",
        color: "#FFFFFF",
        fontSize: 25, 
        padding: 20,
        margin: 5*/

        backgroundColor: '#F22B10', 
        alignItems:"center",
        color: "#FFFFFF",
        fontSize: 25, 
        padding: 5,
        marginTop: 25,
        bordeStyle: 'solid',
        borderWidth : 2,
        borderColor: 'black'  
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 10,
    },
    header:{
        backgroundColor: secondaryColor,
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    partner_container: {
        padding: 10,
        backgroundColor: secondaryColor,
        flexDirection: 'row'
    },
    normal_info:{
        fontSize: 18
    }
}