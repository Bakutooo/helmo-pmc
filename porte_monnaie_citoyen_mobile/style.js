let primaryColor = "#F3F7F7";
let secondaryColor = "#BBBBBB";
let buttonColor = "#0084b4";

export default {
    button_menu: {
        fontSize: 22,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    menu: {
        width: "70%",
        height: "100%",
        backgroundColor : '#f7f7f7',
        borderWidth : 3,
        borderColor: 'black',
    },
    row: {
        marginTop: 6,
        marginRight : 5,
        marginLeft : 5,
        padding: 5,
        //backgroundColor: '#DBAD19',
        backgroundColor: '#ffff6c',
        //backgroundColor : '#F7471E', 
        //backgroundColor : '#f7f7f7',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius : 10, 
    },
    title_row: {
        margin: 10,
        fontSize: 25,
        fontWeight : 'bold'

    },
    content_row: {
        margin : 10,
        fontSize: 17
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

        textAlign : 'center',
        //backgroundColor: '#F22B10', 
        backgroundColor : '#E51B24',
        alignItems:"center",
        color: "#FFFFFF",
        fontSize: 25, 
        padding: 5,
        marginTop: 25,
        
        borderRadius : 10, 

        /*bordeStyle: 'solid',
        borderWidth : 2,
        borderColor: 'black', */
 
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 10,
    },
    header:{
        //backgroundColor: '#EFF2EE',
        backgroundColor : '#f7f7f7',
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    partner_container: {
        padding: 10,
        backgroundColor: secondaryColor,
        flexDirection: 'row',
        borderWidth : 1,
        borderColor: 'black',
        backgroundColor: '#DBAD19',
    },
    normal_info:{
        padding: 7,
        fontSize: 18
    }
}