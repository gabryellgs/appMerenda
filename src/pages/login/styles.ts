import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    boxTop: {
        height:Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
    },
    boxMid: {
        height:Dimensions.get('window').height/2,
        width: '100%',
        backgroundColor: 'white',
    },
    boxBottom: {
        height:Dimensions.get('window').height/3,
          width: '100%',
        alignItems:'center',
        justifyContent:'center',
    },
    bottom:{
        width:200,
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#335639',
        borderRadius:40,
        
    },
    Fundo: {
        width: 500,
        height: 900,
    },
    textInput:{
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,

    },
    boxInput:{
       width: '90%',
       height: 40,
       marginLeft:20,
       borderWidth: 1,
       marginTop: 12,
       borderRadius:40,
       borderColor: 'lightgray',
       flexDirection: 'row',
       alignItems: 'center',
       paddingHorizontal:5,
       backgroundColor: 'whitesmoke',

    },
    input:{
        height:'100%',
        width:'90%',
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
        marginTop: 70,
    },
     text2:{
        fontWeight: 'bold',
        color: 'white',
 
    },
    textoAviso:{
        marginTop: 20,
        marginLeft: 15,
        fontSize: 12,
        fontWeight: 'bold',
    },
});
