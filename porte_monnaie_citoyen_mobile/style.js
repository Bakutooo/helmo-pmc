let primaryColor = "#D32D27";
let secondaryColor = "#F2F2F2";

let primaryColorMenu = "#797979";
let secondaryColorMenu = "#666666";

export default {
    
    form_connection: {
        justifyContent: "center",
        padding: 15
    },
    form_inscription: {
        height: "100%",
        padding: 15,
        backgroundColor: secondaryColor
    },
    button_connection: {
        textAlign : 'center', 
        backgroundColor : primaryColor,
        alignItems:"center",
        color: "white",
        fontSize: 25, 
        padding: 5,
        borderRadius : 5, 
        marginBottom: 10,
    },
    input_connection: {
        height: 40,
        marginBottom: 10,
        padding: 5,
        fontSize: 15, 
        width: "100%",
        borderWidth : 1,
        borderBottomWidth: 3,
        borderColor: '#777777'
    },
    button_link: {
        fontSize: 20,
        color: primaryColor,
        marginBottom: 10
    },

    
    header:{
        backgroundColor : primaryColor,
        paddingTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
    },


    row: {
        marginTop: 5,
        backgroundColor: secondaryColor,
    },
    title_row: {
        margin: 10,
        fontSize: 25,
        fontWeight : 'bold'

    },
    content_row: {
        margin : 5,
        fontSize: 17
    },

    /* ---------------------------------------------------------------- */
    button_menu: {
        fontSize: 22,
        padding: 10,
        color: "white"
    },
    menu: {
        width: "60%",
        height: "100%",
        backgroundColor : primaryColorMenu,
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
        borderWidth : 1,
        borderColor: 'black'  
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 10,
    },
    partner_container: {
        padding: 10,
        backgroundColor: secondaryColor,
        flexDirection: 'row',
        borderBottomWidth : 1,
        borderColor: 'black',
    },
    normal_info:{
        padding: 7,
        fontSize: 18
    }
}